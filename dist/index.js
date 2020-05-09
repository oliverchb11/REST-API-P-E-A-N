"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const router_usuario_1 = __importDefault(require("./routers/router-usuario"));
//middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//router
app.use(router_usuario_1.default);
//setting
app.set("port", process.env.PORT || 3000);
//servidor
app.listen(app.get("port"), () => {
    console.log("servidor en el puerto:", app.get("port"));
});
