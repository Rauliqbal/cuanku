import express from "express";
import authRoute from "./authRouter";
import accountRoute from "./accountRoute";

const routes = express.Router();

// AUTH ROUTE
routes.use("/auth", authRoute);
routes.use("/account", accountRoute);

export default routes;
