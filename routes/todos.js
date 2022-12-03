const { Router } = require('express')
const express=require('express')
const  router = express.Router()

const TodoControler =  require('../controlers/TodoControler')


router.get('/lister' ,TodoControler.ListeTodo )
router.post('/ajouter' , TodoControler.AjouterTodo)
router.delete('/supprimer/:id' , TodoControler.SupprimerTodo)
router.post('/modifier/:idtodos' , TodoControler.ModifierTodo)
router.get('/get/:idtodos' , TodoControler.todoById)

module.exports = router;
