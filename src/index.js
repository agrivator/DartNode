import express from 'express';

import customer from './components/customer';

const app = express();
// Middlewares ivde.

// bodyparser middleware to parse json and url codes
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// express routes ivde.
app.use('/customers', customer);

app.get('/', (req, res) => {
  res.send('Hey!');
});

export default app;
