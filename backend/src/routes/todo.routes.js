import { Router } from "express";
import {
  getAllTodo,
  AddTodo,
  completeTodo,
  getOneTodo,
  editTodo,
} from "../controllers/todo.controller.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
const todoRouter = Router();
todoRouter.route("/add-todo").post(AddTodo);
todoRouter.route("/get-todos").get(verifyJWT, getAllTodo);
todoRouter.route("/complete-todo").post(verifyJWT, completeTodo);
todoRouter.route("/get-one-todo").get(verifyJWT, getOneTodo);
todoRouter.route("/edit-todo").post(verifyJWT, editTodo);
export { todoRouter };
