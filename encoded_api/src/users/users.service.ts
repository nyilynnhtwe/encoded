import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUserService = async () => {
    return await prisma.user.findMany();
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
