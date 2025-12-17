import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

import { router } from "./routes/user.routes.js";
import { googleRouter } from "./routes/google.routes.js";
import { todoRouter } from "./routes/todo.routes.js";
app.use("/api/users", router);
app.use("/api/users/google-login", googleRouter);
app.use("/api/p1", todoRouter); //p1 reffers to Projects 1 -Todo

app.use((err, req, res, next) => {
  console.error(err);
  if (err && err.statusCode) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message || "Something went wrong",
      errors: err.error || [],
    });
  }

  // Fallback for unexpected errors
  res.status(500).json({
    success: false,
    message: err?.message || "Internal Server Error",
  });
});

export { app };
