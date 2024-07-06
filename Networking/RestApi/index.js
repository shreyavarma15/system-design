import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.all("/", (req, res) => {
  console.log("Request", req);
  console.log("Response", res);
  res.send("I m Up!");
});
const PORT = 5111;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

const todos = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    completed: true,
  },
  {
    id: "3",
    title: "Task 3",
    completed: false,
  },
];

//Read
app.get("/todos", (req, res) => {
  res.json(todos);
});

//Create
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json({
    message: "New Todo added!",
  });
});

//Update
app.put("/todos/:id", (req, res) => {
  const newTodoData = req.body;
  const todoParamId = req.params.id;
  const todoIndex = todos.findIndex((td) => td.id === todoParamId);

  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: todoParamId,
      ...newTodoData,
    };
    res.json({
      message: "Todo updated successfully!",
    });
  } else {
    res.status(400).json({
      message: "Todo Id does not exist!",
    });
  }
});

//Delete
app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const todoIndex = todos.findIndex((td) => td.id === todoId);

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);

    res.json({
      message: "Todo deleted successfully!",
    });
  }
});
