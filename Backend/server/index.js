import  express  from "express";
import cors from 'cors';
import bodyParser from 'body-parser';


//Components
import Connection from "./connection/db.js";
import DefaultData from "./Default.js";
import Route from './Route/route.js';

const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json({extended: true }))

app.use('/',Route);

Connection();

app.listen(8000,()=>{
    console.log("Listening to port 8000!");
})

DefaultData();