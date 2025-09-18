import express from 'express';
//const express = require('express');
import notesRoters from './routes/notesRotes.js';
import { connectDB } from './config/db.js';

const app = express();

app.use("/api/notes",notesRoters);

app.listen(5001, () => {
  console.log('Server is running on port: 5001');
});