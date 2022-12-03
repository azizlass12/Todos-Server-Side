const todosModel = require("../models/todos");
// fonction ajouter todo 
exports.AjouterTodo = (req, res) => {
    // res.send("le corps de fonction ajouter todo ")
  
    const todosObj = {
      "content" : req.body.content,
      "date" : req.body.date
  };
    const todos = new todosModel(todosObj);
    todos.save((error, createdTodos) => {
      if (error) return res.status(400).json({ error }); // error d'ajout
      if (createdTodos) {
        return res.status(200).json({ createdTodos });
      }
    })}
// fonction supprimer todo
exports.SupprimerTodo = (req, res) => {    
    const id = req.params.id;
    todosModel.findByIdAndRemove(id).exec((error, todos) => {
      if (error) return res.status(400).json({ error }); // error d'ajout
      if (todos) {
        return res.status(200).json({ message: "todo supp avec succes .. !" });
      }
    });
    // res.send("le corps de fonction supprimer");
  }
  //fonction modifier todo
  exports.ModifierTodo = (req, res) => {
    const idtodos = req.params.idtodos;
    const modifiedObj = {
      content:req.body.content,
      date:req.body.date
    };
    todosModel.findByIdAndUpdate(idtodos , modifiedObj).exec((error, modifTodo) => {
      if (error) return res.status(400).json({ error }); // error d'ajout
      if (modifTodo) {
        return res
          .status(200)
          .json({ message: "todo modifier avec succes .. !" });
      }
    })}
    //fonction lister todo
    exports.ListeTodo =   (req, res) => {

        todosModel.find({}).exec((error, listTodos) => {
          if (error) return res.status(400).json({ error });
      
          if (listTodos) {
            return res.status(200).json({ listTodos });
         }
        })}

        exports.todoById =   (req, res) => {
const id = req.params.idtodos
          todosModel.findById(id).exec((error,Todos) => {
            if (error) return res.status(400).json({ error });
        
            if (Todos) {
              return res.status(200).json({Todos });
           }
          })}
      