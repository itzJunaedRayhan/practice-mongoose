import { HydratedDocument, Model } from "mongoose";

export interface IUser {
    id: string;
    role: "student" | "admin";
    password: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
}

//  Statics:
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}

//  Instance methods:
export interface IUserMethods {
  fullName(): string;
}

