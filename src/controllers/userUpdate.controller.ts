import { Request, Response } from "express";
import { userUpdateService } from "../services/userUpdate.service";

export const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await userUpdateService({ id, ...req.body });

    return res.status(201).json({ message: "User updated" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};
