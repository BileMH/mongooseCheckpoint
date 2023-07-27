const express= require ("express")
const app = express()
app.use(express.json())

// require env et config 
require("dotenv").config();
// connect db
const connectDb=require("./Config/ConnectDB")
connectDb();
//create port
const PORT=process.env.PORT

//routes
app.use('/api/Contact' , require("./Routes/Contact"))
app.use("api/user",require("./Routes/user"))
// la création du serveur
app.listen(PORT,error=>{
    error ? console.error(`fail to connect ,${error}`) :
    console.log(`server is running on port ${PORT}`)
})