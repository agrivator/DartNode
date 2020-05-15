/* eslint-disable no-console */
import mongoose from 'mongoose';

const db = process.env.MONGODB_URI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB.'))
  .catch((err) => console.error(`Could not connect to MongoDB.${err}`));
