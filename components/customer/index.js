import { Router } from "express";

import customerController from "./customerController";

const router = Router();

router.get("/auth", customerController.hello);

export default router;