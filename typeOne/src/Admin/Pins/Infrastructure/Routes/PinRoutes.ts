import express from 'express';
import { getAllPins, newPin, getPin } from "../Controllers/Controller";

const router = express.Router();

router.get('/pins', getAllPins)
router.get('/pins/:id', getPin)
router.post('/pins', newPin)

export { router as pinsRoutes };
