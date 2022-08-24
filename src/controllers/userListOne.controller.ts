import { Request, Response } from "express";
import { userListOneService } from "../services/userListOne.service";

export const userListOneController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userListOneService(id);

    return res.json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};
