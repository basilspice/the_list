const express = require("express");

const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const listRoutes = require("./routes/listRoutes");

const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});



app.use("/api/users", userRoutes);
app.use("/api/lists", listRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
