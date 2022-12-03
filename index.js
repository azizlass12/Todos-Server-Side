const { request } = require("express");

const express = require("express");
const cors = require("cors");


const mongoose = require("mongoose");
const todos = require("./models/todos");

const app = express();

app.use(express.json());
app.use(cors({ origine: "*" }));


//here
const todosModel = require("./models/todos");

const TodosRoutes = require('./routes/todos')
app.use('/todos' , TodosRoutes)

// probleme  a partir le   terminal ou a partir  cause i install it  locallement dans ma projetc  donc il faut   utliser -0g lors de l'istallation  ou npm i,stall nodemon --save

// connextion a la base de donneé
mongoose.connect("mongodb://localhost:27017/todo", { useNewUrlParser: true });

const db = mongoose.connection;
db.once("open", () => {
  console.log("database connected");
});
db.on("error", (err) => {
  console.log("connection error :", err);
});

app.listen(3000, () => {
  console.log("server demarer");
});
