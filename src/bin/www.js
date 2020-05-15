/* eslint-disable no-console */
import { createServer } from 'http';

import app from '../index';

const { PORT } = process.env;

// mongoose.connect("mongodb://localhost:27017/dart", {useNewUrlParser: true,  useUnifiedTopology: true})
//     .then(() => console.log("Connected to MongoDB."))
//     .catch(err => console.error("Could not connect to MongoDB."));

const normalizePort = (val) => {
  const port = parseInt(val, 10);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
};

const port = normalizePort(PORT);
app.set('port', port);

const server = createServer(app);

server.listen(port, () => {
  console.log('listening to port', port);
  console.log(`http://localhost:${port}`);
});
