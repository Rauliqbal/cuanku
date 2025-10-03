import express from "express";
import authRoute from "./authRouter";

const routes = express.Router();

// AUTH ROUTE
routes.use("/auth", authRoute);

export default routes;
