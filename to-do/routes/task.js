const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const taskController = require('../controllers/task');
const route = express.Router();
    
route.get('/', taskController.getHomepage);

route.post('/edit-task', taskController.getEditTask);

route.post('/edit-submit', taskController.postEditTask);

route.post('/delete-task', taskController.postDeleteTask);

route.get('/add-task', taskController.getAddTask);

route.post('/add-task', taskController.postAddTask);

module.exports = route;