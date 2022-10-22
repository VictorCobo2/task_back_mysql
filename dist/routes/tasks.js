"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasks_route = void 0;
const express_1 = __importDefault(require("express"));
const tasks_1 = require("../controllers/tasks");
exports.tasks_route = express_1.default.Router();
exports.tasks_route.get('/tasks/getAll', tasks_1.getTasks);
exports.tasks_route.get('/tasks/search/:id', tasks_1.getTask);
exports.tasks_route.post('/tasks/create', tasks_1.createTask);
exports.tasks_route.put('/tasks/edit/:id', tasks_1.editTask);
exports.tasks_route.delete('/tasks/delete/:id', tasks_1.deleteTask);
