import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

export const userListOneService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const searchedUser = users.find((user) => user.id === id);

  return searchedUser;
};
