import express from 'express'
import { createTask, deleteTask, editTask, getTask, getTasks } from '../controllers/tasks'

export const tasks_route = express.Router()

tasks_route.get('/tasks/getAll', getTasks)
tasks_route.get('/tasks/search/:id', getTask)
tasks_route.post('/tasks/create', createTask)
tasks_route.put('/tasks/edit/:id', editTask)
tasks_route.delete('/tasks/delete/:id', deleteTask)