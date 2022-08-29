const express = require("express");
const {
  getLists,
  createList,
  getListById,
  updateList,
  deleteList,
} = require("../controllers/listController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getLists);
router
  .route("/:id")
  .get(getListById)
  .put(protect, updateList)
  .delete(protect, deleteList);
router.route("/create").post(protect, createList);
module.exports = router;
