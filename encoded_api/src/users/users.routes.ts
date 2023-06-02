import { Router } from "express";
import { createUser, getUserRoleId, getUsers } from "./users.controller";


const userRouter : Router = Router();

userRouter.get("/",getUsers);
userRouter.get("/roleId",getUserRoleId);
userRouter.post("/",createUser);


export default userRouter;