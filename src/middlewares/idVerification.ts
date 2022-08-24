import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

export const idVerification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    const userExists = users.find((user) => user.id === id);

    if (!userExists) {
      return res.status(400).json({ message: "Invalid id" });
    } else {
      next();
    }
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};
