const express = require('express');

// 2 create istance

const app = express()

// 4 require dotenv

app.use(express.json()) 

require("dotenv").config() ;


//6 connect db

const connectDb = require("./config/ConnectDB");
connectDb() ;

// 7 create routes

app.use("/api/contact" , require("./Routes/Contact") )

app.use("/api/user",require("./Routes/user"))





// 3 create port

const PORT = process.env.PORT


//5 create server

app.listen(PORT , error=> {
    error ? console.error(`fail to connect , ${error}`) : 
    console.log(`Server is running at ${PORT}`)
})