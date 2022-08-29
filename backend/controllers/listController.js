const List = require("../models/listModel");
const asyncHandler = require("express-async-handler");

const getLists = asyncHandler(async (req, res) => {
  const lists = await List.find({user: req.user._id});
  res.json(lists);
});



const createList = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body;
  
    if (!title || !content || !category) {
      res.status(400);
      throw new Error("Please fill out all the fields");
   
    } else {
      const list = new List({ user: req.user._id, title, content, category });
  
      const createdList = await list.save();
  
      res.status(201).json(createdList);
    }
  });
const getListById = asyncHandler(async (req,res) => {
    const list = await List.findById(req.params.id);

    if(list) {
        res.json(list);

    }else {
        res.status(404).json({message: "List not found"})
    }
    
});
const deleteList = asyncHandler(async (req, res) => {
    const list = await List.findById(req.params.id);
  
    if (list.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You can't perform this action");
    }
  
    if (list) {
      await list.remove();
      res.json({ message: "List Removed" });
    } else {
      res.status(404);
      throw new Error("List not Found");
    }
  });
const updateList = asyncHandler(async (req, res) => {
    const { title, content, category } = req.body;
  
    const list = await List.findById(req.params.id);
  
    if (list.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("You can't perform this action");
    }
  
    if (list) {
      list.title = title;
      list.content = content;
      list.category = category;
  
      const updatedList = await list.save();
      res.json(updatedList);
    } else {
      res.status(404);
      throw new Error("List not found");
    }
  });
  
module.exports = { getLists, createList, getListById, updateList, deleteList};
