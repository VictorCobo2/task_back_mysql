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
      : res.status(404).json({ msg: `No existe una tarea con el id: ${id}` });
  } catch (error) {
    res.json({ msg: error });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const task = await Tasks.create(body);
    res.json(task);
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};

export const editTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const task = await Tasks.findByPk(id);
    if (!task) {
      return res.status(404).json({
        msg: "No existe una tarea con el id " + id,
      });
    }

    await task.update(body);

    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error,
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const task = await Tasks.findByPk(id);
    if (!task) {
      return res.status(404).json({
        msg: "No existe una tarea con el id " + id,
      });
    }

    await task.destroy();

    res.json(task);
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};
