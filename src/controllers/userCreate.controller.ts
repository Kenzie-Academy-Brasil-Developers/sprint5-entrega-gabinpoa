import { Request, Response } from "express";
import { userCreateService } from "../services/userCreate.service";

export const userCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, age } = req.body;

    const createdUser = await userCreateService({ name, email, password, age });

    return res.status(201).json(createdUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};
