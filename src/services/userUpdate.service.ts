import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { IUserUpdate } from "../interfaces";

export const userUpdateService = async ({
  id,
  name,
  email,
  password,
  age,
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const searchedUser = users.find((user) => user.id === id);

  const updatedUser = {
    name: name || searchedUser?.name,
    email: email || searchedUser?.email,
    password: password || searchedUser?.password,
    age: age || searchedUser?.age,
    updated_at: new Date(),
  };

  userRepository.update(id, updatedUser);
};
