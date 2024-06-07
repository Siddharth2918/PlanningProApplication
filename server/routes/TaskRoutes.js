import express from 'express';
import { AddTask, DeleteTask, SetStatus, UpdateTask,  } from '../controllers/taskController.js';
const taskRoute = express.Router('/task');

// TaskRoute.get('/getTask/:id', GetTask)
taskRoute.post('/addTask', AddTask);
taskRoute.put('/updateTask', UpdateTask);
taskRoute.put('/setStatus/:id', SetStatus);
taskRoute.delete('/deleteTask/:id', DeleteTask);

export default taskRoute;