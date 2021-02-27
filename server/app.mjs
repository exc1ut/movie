import express from 'express'
import morgan from 'morgan'
import movieRouter from './api/movies.mjs'
import bodyParser from 'body-parser'

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended :true}));
app.use(express.json())



 app.use('/movies',movieRouter);



 app.use((req,res,next)=> {
     const error = new Error('Not Found');
     error.status = 400;
     next(error);
 })

 app.use((error,req,res,next)=> {
    res.status(error.status || 500);
    res.json({
        error: {
            message : error.message
        }
    })
 })
 export default app;