import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: { type: String, required: true, unique: true },
    role: { type: String, enum: ["student", "admin"], required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String },
    gender: { type: String, enum: ["male", "female"], required: true },
    email: { type: String, match: /.+\@.+\..+/ },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
});

//  For Static Methods:
userSchema.static("getAdminUsers", async function getAdminUsers () {
  const admins = await this.find({role: "admin"});
  return admins;
})


//  For Instance methods:
userSchema.method("fullName", function fullName() {
    return this.name.firstName + " " + this.name.lastName;
})

export  const User = model<IUser, UserModel>("User", userSchema);