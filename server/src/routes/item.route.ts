import express, { Router } from "express";
import itemController from "../controllers/item.controller";

const router: Router = express.Router();

router.get("/getItems", itemController.getItems);
router.post("/addItem", itemController.addItem);

export default router;
