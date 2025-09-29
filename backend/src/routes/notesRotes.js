import express from 'express';
import { getAllNotes, createNotes, updateNotes, deleteNotes,getNoteById } from '../controller/notescontroller.js';
const router = express.Router();

router.get("/note", getAllNotes);
router.get("/:id",getNoteById)
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);
export default router;