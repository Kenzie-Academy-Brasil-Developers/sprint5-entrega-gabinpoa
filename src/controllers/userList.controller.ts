import { Request, Response } from "express";
import { userListService } from "../services/userList.service";

export const userListController = async (req: Request, res: Response) => {
  try {
    const users = await userListService();

    return res.json(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};
