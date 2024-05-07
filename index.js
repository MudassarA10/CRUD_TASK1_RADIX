const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");

const apiRoutes = require("./routes");

const { sequelize, connectToDb } = require("./database");
let app = express();
app.use(cors());
const PORT = 3001;

app.use(express.json());

app.use("/api", apiRoutes);
app.post("/crud_task1", function (req, res) {
  res.status(200).json({ message: "data updated in backend" });
});
app.get("/crud_task1", function (req, res) {
  res.status(200).json({ message: "Hello world welcome to backend" });
});
app.delete("/crud_task1", function (req, res) {
  res.status(204).json({ message: "Hello world welcome to backend" });
});

app.listen(PORT, async () => {
  console.log(`Server is running at port http://localhost:${PORT}`);
  await connectToDb();
});
