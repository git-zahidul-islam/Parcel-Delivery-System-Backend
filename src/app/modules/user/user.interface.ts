import { Types } from "mongoose";

export enum Role {
  ADMIN = "ADMIN",
  SENDER = "SENDER",
  RECEIVER = "RECEIVER",
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}

export interface IAuthProvider {
  provider: "google" | "credentials";
  providerId: string;
}

export interface IUser {
  _id?: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: Role;
  status: UserStatus;
  phone?: string;
  picture?: string;
  address?: string;
  isDeleted?: boolean;
  isVerified?: boolean;
  auths: IAuthProvider[];
}
