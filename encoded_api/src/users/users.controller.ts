import { Request, Response } from "express";
import {  createUserService, generateRoleNo, getUserService } from "./users.service";

export const getUser = async (req:Request,res:Response) => {
    const result = await getUserService();    
    res.send(result);
}



export const createUser = async (req:Request,res:Response) => {


    let generatedRoleNo = await generateRoleNo();

    const {
        username,
        gender,
        nickname,
        birthYear,
        motive,
    } = req.body;
    const result = await createUserService(
        {
            username : username,
            gender : gender,
            nickname : nickname,
            birthYear : parseInt(birthYear),
            motive : motive,
            roleNo : generatedRoleNo
        }
    );
    res.send(result);
}