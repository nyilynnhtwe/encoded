"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const PORT = 8000;
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.use("/api", routes_1.default);
app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT} !`);
});
//# sourceMappingURL=app.js.map