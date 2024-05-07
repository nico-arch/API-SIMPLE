import express from 'express';
import { StatusCodes } from 'http-status-codes';



const rooter = express.Router();

const STATUS = {
  success: 'OK',
  failure: 'NO'
};

rooter.use(express.json());


rooter.get('/ping', (req, res) => {
  res.status(StatusCodes.OK);

  //console.log('Hello World!');
  res.send('OK !');
});


//export default mainRoutes;
export default rooter;

