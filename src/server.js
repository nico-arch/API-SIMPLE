import express from 'express';
import mainRoutes from './main.routes.js'
import userRoutes from './user.rootes.js'
import { StatusCodes } from 'http-status-codes';

const app = express();
const port = 3000;

app.use(express.json());

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