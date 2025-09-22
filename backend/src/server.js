import express from 'express';
//const express = require('express');
import notesRoters from './routes/notesRotes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
 

dotenv.config();
const PORT=process.env.PORT || 5000;


console.log(process.env.MONGO_URI);

const app = express();

await connectDB();

app.use("/api/notes",notesRoters);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});