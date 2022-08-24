import { Request, Response } from "express";
import { userDeleteService } from "../services/userDelete.service";

export const userDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await userDeleteService(id);

    return res.json({ message: "User deleted" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};
