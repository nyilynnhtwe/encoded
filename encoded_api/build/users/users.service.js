"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRoleNo = exports.createUserService = exports.getUserRoleIdService = exports.getUsersService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getUsersService = async () => {
    const users = await prisma.user.findMany();
    return {
        devmessage: "users-fetched-successfully",
        message: "Users are fetched successfully",
        date: Date().toString(),
        data: users
    };
};
exports.getUsersService = getUsersService;
const getUserRoleIdService = async (id) => {
    const user = await prisma.user.findFirst({
        where: { id: id }
    });
    return {
        devmessage: "user-fetched-successfully",
        message: "User is fetched successfully",
        date: Date().toString(),
        data: user
    };
};
exports.getUserRoleIdService = getUserRoleIdService;
const createUserService = async (userCreate) => {
    const createdUser = await prisma.user.create({
        data: userCreate
    });
    return {
        devmessage: "user-created-successfully",
        message: "User is created successfully",
        date: Date().toString(),
        data: createdUser
    };
};
exports.createUserService = createUserService;
const generateRoleNo = async () => {
    const users = await prisma.user.findMany({
        select: {
            roleNo: true
        }
    });
    let totalUsers = 100;
    // generate a roll no between 1 and 99
    let roleNo = Math.floor(1 + (Math.random() * totalUsers));
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.roleNo === roleNo) {
            roleNo = Math.floor(1 + (Math.random() * totalUsers));
        }
    }
    return parseInt(roleNo.toString());
};
exports.generateRoleNo = generateRoleNo;
//# sourceMappingURL=users.service.js.map