import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserCreate } from "../interfaces";
import * as bcrypt from "bcrypt";

export const userCreateService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const user = new User();
  user.name = name;
  user.email = email;
  user.age = age;
  user.password = bcrypt.hashSync(password, 10);
  user.created_at = new Date();
  user.updated_at = new Date();

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};
