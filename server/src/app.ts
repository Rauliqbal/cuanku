import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import routes from "./routes";
import { errorHandler, notFoundHandler } from "./middlewares/errorHandler";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

// Routes
app.use("/api", routes);
app.get("/", (req, res) => res.json({ message: "API is running" }));

// Error Handler
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
