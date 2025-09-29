import Note from "../Models/Note.js";
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({createAt:-1});
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNote controller:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
}
export async function getNoteById(req,res) {
  try {
    const note = await Note.findById(req.params.id)
    if(!note) return res.status(404).json({message:"page not found"})
      res.status(200).json(note)
    
  }
   catch (error) {
    console.error("Error in getNoteById controller:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
    
  }
  

export const createNotes =async(req, res) => {
  try{
    const {title,content} = req.body
    const note = new Note({title,content});

    const savedNote = await note.save();
    res.status(201).json(savedNote)
    
  }
  catch(error){
    console.error("Error is  in createNote controller",error);
    res.status(500).json({message:"Internal server Error"});

  }
}   
export async function updateNotes(req, res) {
  try {
    const {title,content}=req.body
     const updatedNote= await Note.findByIdAndUpdate(req.params.id,{title,content},{
      new:true,
       
     });
     if(!updatedNote) return res.status(404).json({message:"Note not found"})
    res.status(200).json({message:"note updated successfully"});
    
  } catch (error) {
    console.error("error in updatedNote controller",error);;
    res.status(500).json({message:"Internal server error"})
    
  }
}   
export async function deleteNotes(req, res) {  
  try {
    const deletedNote=await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote) return res.status(404).json({message:"Note not found"});
    res.status(200).json({message:"Note deleted successfully"});
  } catch (error) {
    console.error("error in deleteNote controller",error);
    res.status(500).json({message:"internal server error"})
    
    
  }
  
}   