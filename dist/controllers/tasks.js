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
exports.createTask = exports.getTask = exports.getTasks = void 0;
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
            : res.status(404).json({ msg: `No existe la tarea con el id: ${id}` });
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.getTask = getTask;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        console.log(body);
        const task = new tasks_1.Tasks();
        yield task.save();
        res.json(task);
    }
    catch (error) {
        res.json({ msg: error });
    }
});
exports.createTask = createTask;
