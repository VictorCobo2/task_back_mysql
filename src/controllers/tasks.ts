import { Request, Response } from "express";
import { Tasks } from "../models/tasks";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Tasks.findAll();
    res.json(tasks);
  } catch (error) {
    res.json({ msg: error });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Tasks.findByPk(id);
    task
      ? res.json(task)
      : res.status(404).json({ msg: `No existe la tarea con el id: ${id}` });
  } catch (error) {
    res.json({ msg: error });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    console.log(body);
    const task = new Tasks();
    await task.save();
    res.json(task);
  } catch (error) {
    res.json({ msg: error });
  }
};
