import express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { StatusCodes } from 'http-status-codes';
import compression from 'compression';
import cors from 'cors';

import mainRoutes from './main.routes.js';
import userRoutes from './user.rootes.js';


const limiter = rateLimit({
  //windowMs: 15 * 60 * 1000, // 15 minutes
  windowMs: 60 * 1000, // 1 minute
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 1 minute).
  validate: { xForwardedForHeader: false }
  //message: 'Too many requests from this IP, please try again after 1 minute',
})

const app = express();
const port = 3000;

app.use(compression());
// Apply the rate limiting middleware to all requests.
app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(cors());



app.use('/v1', mainRoutes)
app.use('/v1/user', userRoutes)



app.get('/', (req, res) => {
  res.status(StatusCodes.OK);

  //console.log('Hello World!');
  res.send("Hello World! I'm an API !");
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});