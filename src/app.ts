import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import userRoutes from "./app/modules/user/user.route"


const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/user", userRoutes);

export default app;


