import { Request, Response, Router } from "express";
import {
  deleteItem,
  getAllItems,
  getItem,
  postItem,
  updateItem,
  } from "../controlador/item";

export const router = Router()

router.get("/", getAllItems);
router.post("/", postItem);
router.get('/:id', getItem)
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);