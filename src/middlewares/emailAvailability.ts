import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

export const emailAvalability = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;

    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    const emailAlreadyExists = users.find((user) => user.email === email);

    if (emailAlreadyExists) {
      return res
        .status(400)
        .json({ message: "This e-mail is already being used" });
    } else {
      next();
    }
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};
