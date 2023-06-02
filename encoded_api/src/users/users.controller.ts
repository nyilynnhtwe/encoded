import { Request, Response } from "express";
import {  createUserService, generateRoleNo, getUserRoleIdService, getUsersService } from "./users.service";

export const getUsers = async (req:Request,res:Response) => {
    const result = await getUsersService();    
    res.send(result);
}

export const getUserRoleId = async (req:Request,res:Response) => {
    const result = await getUserRoleIdService(req.body.id);    
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
    res.send(await createUserService(
        {
            username : username,
            gender : gender,
            nickname : nickname,
            birthYear : parseInt(birthYear),
            motive : motive,
            roleNo : generatedRoleNo
        }
    ));
}