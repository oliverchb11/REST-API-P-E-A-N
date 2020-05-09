import express, { urlencoded } from "express";
const app = express();
import router from "./routers/router-usuario";

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router
app.use(router);
//setting
app.set("port", process.env.PORT || 3000);

//servidor
app.listen(app.get("port"), () => {
  console.log("servidor en el puerto:", app.get("port"));
});
