let express = require("express");;
let bodyParser = require("body-parser");;
let cors = require("cors");;
let dotenv = require("dotenv");
dotenv.config;
let {initDbConnection} = require("./dbutil.js");
let path = require("path");

let log = console.log;

let app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());


let PORT = process.env.PORT|| 5000;


global.clientConnection = initDbConnection();

global.appRoot = path.resolve(__dirname);

app.get("/", (req, res, next) => {
    res.json("Welcome")
});
app.use(require("./routes/rootRoute.js"))

let listener = app.listen(PORT, () =>{
    log(`The app is listening on port ${listener.address().port}, can be run at http://localhost:${listener.address().port}`)
});