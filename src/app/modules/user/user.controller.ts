import { Request, Response, NextFunction } from "express";
import { createUserToDB, getAdminUsersFromDB, getUserByIdFromDB, getUsersFromDB } from "./user.services";
import { IUser } from "./user.interface";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const user = await createUserToDB(data);
    res.status(200).json({
        status: "success",
        data: user
    })
}

export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<IUser[]> => {
    const user = await getUsersFromDB();
    res.status(200).json({
        status: "success",
        data: user
    })
    return user;
}

export const getUserByID = async (req: Request, res: Response, next: NextFunction): Promise<IUser | null> => {
    const {id} = req.params;
    const user = await getUserByIdFromDB(id);
    res.status(200).json({
        status: "success",
        data: user
    })
    return user;
}

export const getAdminUsers = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getAdminUsersFromDB();
    res.status(200).json({
        status: "success",
        data: user
    })
    return user;
}