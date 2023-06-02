"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("./users.controller");
const userRouter = (0, express_1.Router)();
userRouter.get("/", users_controller_1.getUsers);
userRouter.get("/roleId", users_controller_1.getUserRoleId);
userRouter.post("/", users_controller_1.createUser);
exports.default = userRouter;
//# sourceMappingURL=users.routes.js.map