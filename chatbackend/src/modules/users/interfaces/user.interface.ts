export interface IUser {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserWithPassword extends IUser {
  password: string;
}

export interface ICreateUser {
  username: string;
  email: string;
  password: string;
}

export interface IUpdateUser {
  username?: string;
  email?: string;
  avatar?: string;
} 