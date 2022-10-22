"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.editTask = exports.createTask = exports.getTask = exports.getTasks = void 0;
const tasks_1 = require("../models/tasks");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield tasks_1.Tasks.findAll();
        res.json(tasks);
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.getTasks = getTasks;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const task = yield tasks_1.Tasks.findByPk(id);
        task
            ? res.json(task)
            : res.status(404).json({ msg: `No existe una tarea con el id: ${id}` });
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.getTask = getTask;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const task = yield tasks_1.Tasks.create(body);
        res.json(task);
    }
    catch (error) {
        res.status(500).json({
            msg: error,
        });
    }
});
exports.createTask = createTask;
const editTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const task = yield tasks_1.Tasks.findByPk(id);
        if (!task) {
            return res.status(404).json({
                msg: "No existe una tarea con el id " + id,
            });
        }
        yield task.update(body);
        res.json(task);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error,
        });
    }
});
exports.editTask = editTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const task = yield tasks_1.Tasks.findByPk(id);
        if (!task) {
            return res.status(404).json({
                msg: "No existe una tarea con el id " + id,
            });
        }
        yield task.destroy();
        res.json(task);
    }
    catch (error) {
        res.status(500).json({
            msg: error,
        });
    }
});
exports.deleteTask = deleteTask;
