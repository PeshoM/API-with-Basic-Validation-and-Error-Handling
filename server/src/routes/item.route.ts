import express, { Router } from "express";
import itemController from "../controllers/item.controller";

const router: Router = express.Router();

router.get("/items", itemController.getItems);
router.post("/items", itemController.addItem);
router.get("/items/:id", itemController.getItemById);

export default router;
