import { UserRole } from "./enum/type-user-role";
import { UserStatus } from "./enum/type-user-status";

interface IUserBase {
  firstName: string;
  lastName: string;
  email: string;
  bio?: string;
  role: UserRole;
  status: UserStatus;
}

export interface IUserWithPassword extends IUserBase {
  password: string;
}

export interface IUserWithoutPassword extends IUserBase {
  password?: never;
}
