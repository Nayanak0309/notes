import express from 'express';
//const express = require('express');
import notesRoters from './routes/notesRotes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();

connectDB();

app.use("/api/notes",notesRoters);

app.listen(5001, () => {
  console.log('Server is running on port: 5001');
});