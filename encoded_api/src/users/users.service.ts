import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsersService = async () => {
    const users =  await prisma.user.findMany();
    return {
        devmessage  : "users-fetched-successfully",
        message     : "Users are fetched successfully",
        date        : Date().toString(),
        data        : users 
    };
}

export const getUserRoleIdService = async (id:string) => {
    const user =  await prisma.user.findFirst(
        {
            where : { id : id }
        }
    );
    return {
        devmessage  : "user-fetched-successfully",
        message     : "User is fetched successfully",
        date        : Date().toString(),
        data        : user 
    };
}


export const createUserService =async (userCreate: Prisma.UserCreateInput) => {
        const createdUser = await prisma.user.create(
        {
            data : userCreate
        }
    )
    return {
        devmessage  : "user-created-successfully",
        message     : "User is created successfully",
        date        : Date().toString(),
        data        : createdUser 
    };
}

export const generateRoleNo = async () => {
    const users = await prisma.user.findMany(
        {
            select :
            {
                roleNo : true
            }
        }
    );
    let totalUsers = 100;
    // generate a roll no between 1 and 99
    let roleNo = Math.floor(1+(Math.random()*totalUsers));
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if(element.roleNo===roleNo)
            {
                roleNo = Math.floor(1+(Math.random()*totalUsers));
            }
    }
    return parseInt(roleNo.toString());
}
