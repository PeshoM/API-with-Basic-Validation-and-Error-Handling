import express from "express";
import { IItem } from "../models/interfaces/item.interface";
import { v4 as uuidv4 } from "uuid";

let items: IItem[] = [];

const getItems = (req: express.Request, res: express.Response) => {
  res.status(200).json({ items });
};

const addItem = (req: express.Request, res: express.Response) => {
  const { name } = req.body;

  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "Invalid name input." });
    return;
  }

  const newItem: IItem = {
    id: uuidv4(),
    name,
  };

  items.push(newItem);
  res.status(201).json(newItem);
};

export default { getItems, addItem };
