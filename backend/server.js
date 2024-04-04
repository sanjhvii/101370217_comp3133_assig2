const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
var cors = require('cors')

const DB_URL = "mongodb+srv://sanjhvi:app123@cluster0.gzuk5c6.mongodb.net/lab?retryWrites=true&w=majority"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use("/api/", apiRoutes)

app.get('/', (req, res) => {
    console.log("welcome");
    res.send("Welcome to the assignment project");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server is listening on port "+ PORT);
});