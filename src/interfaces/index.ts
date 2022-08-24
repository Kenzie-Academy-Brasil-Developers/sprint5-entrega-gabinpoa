export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  created_at: string;
  updated_at: string;
}
export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  age: number;
}
export interface IUserUpdate {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  age?: number;
}
