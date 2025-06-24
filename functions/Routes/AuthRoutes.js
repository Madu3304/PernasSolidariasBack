import express from "express";
import { login } from "../Controllers/AuthController.js";

export const router = express.Router();

router.post("/login", login);
