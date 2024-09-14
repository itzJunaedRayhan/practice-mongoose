import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = new User (payload);
    user.save()
      .then(() => console.log("User inserted successfully"))
      .catch((err) => console.log("Error inserting user:", err));
    console.log(user.fullName());
      return user;
};

export const getUsersFromDB = async () => {
    const users = await User.find();
    return users;
}

export const getUserByIdFromDB = async (payload: string) : Promise<IUser | null> => {
    const user = await User.findOne({id: payload}, {name: 1, email:1, id: 1});
    return user;
}

export const getAdminUsersFromDB = async () => {
    const admins = await User.getAdminUsers();
    return admins;
}