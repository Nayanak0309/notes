export function getAllNotes(req, res) {
  res.status(201).send("YOU just fetched all the notes!");
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