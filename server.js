import express from 'express';
// import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config;
import { initDbConnection } from './dbutil.js';
// import path from 'path';
import rootRoute from './routes/rootRoute.js';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

let log = console.log;

let app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());


let PORT = process.env.PORT|| 5000;


global.clientConnection = initDbConnection();

// global.appRoot = path.resolve(__dirname);

app.get("/", (req, res, /*next*/) => {
    res.json("Welcome")
});
app.use(rootRoute)

let listener = app.listen(PORT, () =>{
    log(`The app is listening on port ${listener.address().port}, can be run at http://localhost:${listener.address().port}`)
});