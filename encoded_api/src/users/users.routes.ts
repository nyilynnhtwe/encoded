import { Router } from "express";
import { createUser, getUser } from "./users.controller";


const userRouter : Router = Router();

userRouter.get("/",getUser);
userRouter.post("/",createUser);


export default userRouter;