"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserRoleId = exports.getUsers = void 0;
const users_service_1 = require("./users.service");
const getUsers = async (req, res) => {
    const result = await (0, users_service_1.getUsersService)();
    res.send(result);
};
exports.getUsers = getUsers;
const getUserRoleId = async (req, res) => {
    const result = await (0, users_service_1.getUserRoleIdService)(req.body.id);
    res.send(result);
};
exports.getUserRoleId = getUserRoleId;
const createUser = async (req, res) => {
    let generatedRoleNo = await (0, users_service_1.generateRoleNo)();
    const { username, gender, nickname, birthYear, motive, } = req.body;
    res.send(await (0, users_service_1.createUserService)({
        username: username,
        gender: gender,
        nickname: nickname,
        birthYear: parseInt(birthYear),
        motive: motive,
        roleNo: generatedRoleNo
    }));
};
exports.createUser = createUser;
//# sourceMappingURL=users.controller.js.map