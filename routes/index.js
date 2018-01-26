const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/unnamed-map-project');
indexRoutes.use(bodyParser.json());
indexRoutes.use(bodyParser.urlencoded({ extended: false }));
const Todo = require('../models/map');

indexRoutes.get('/', (request, response) => {
  response.render('index.ejs', {
    documentTitle: "Todo List",
    todos: Todo.findOne()
  })
  console.log(Todo.findOne());
})
// indexRoutes.post('/', (request, response) => {
//   let todo = new Todo(request.body);
//   todo.save((err, createdTodoObject) => {
//     if (err) {
//       console.log("index error: " + err);
//       response.sendStatus(500);
//     }
//     response.render('index.ejs', {
//       documentTitle: "Todo List",
//       todos: Todo.findOne()
//     })
//   });
// });

module.exports = indexRoutes;
