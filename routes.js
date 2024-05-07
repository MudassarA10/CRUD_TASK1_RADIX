const express = require("express");
const { Task } = require("./module");

const router = express.Router();

router.get("/crud_task1", async (req, res) => {
  try {
    const data = await Task.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/crud_task1", async (req, res) => {
  const { name, lastname, email } = req.body;
  const newTask = Task.build({
    name: name,
    lastname: lastname,
    email: email,
  });
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/crud_task1/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/crud_task1/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastname, email } = req.body;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    task.name = email;
    task.lastname = name;
    task.email;
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/crud_task1/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    await task.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
