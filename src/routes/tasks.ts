import express from 'express'
import { createTask, getTask, getTasks } from '../controllers/tasks'

export const tasks_route = express.Router()

tasks_route.get('/tasks/getAll', getTasks)
tasks_route.get('/tasks/search/:id', getTask)
tasks_route.post('/tasks/create', createTask)