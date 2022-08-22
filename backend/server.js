const express = require("express");
const lists = require("./data/lists");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes");



const app = express();
dotenv.config();
connectDB();
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/lists", (req, res) => {
  res.json(lists);
});

app.get("/api/lists/:id", (req, res) => {
  res.json(lists);
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
