import Note from "../Models/Note.js";
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error retrieving notes:", error);
    res.status(500).json({ message: "Error retrieving notes", error });
  }
}
export function createNotes(req, res) {
  res.status(201).json({ message: "NOTE CREATED SUCCESSFULLY" });
}   
export function updateNotes(req, res) {
  res.status(201).json({ message: "NOTE UPDATED SUCCESSFULLY" });
}   
export function deleteNotes(req, res) {  
  res.status(201).json({ message: "NOTE DELETED SUCCESSFULLY" });
}   