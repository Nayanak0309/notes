import express from 'express';
import { getAllNotes, createNotes, updateNotes, deleteNotes } from '../controller/notescontroller.js';
const router = express.Router();

router.get("/note", getAllNotes);

router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);
export default router;