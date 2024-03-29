//Importing PACKAGES    
import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose"
// configure dotenv
dotenv.config();
// // IMPORTING ROUTES
 import allRoutes from "./routes/allRoutes.js";
 import allRoutes2 from "./routes/allRoutes2.js";



// create server instance
const app= express();
const port= process.env.PORT

const host =process.env.HOST
const mode= process.env.ENV
mongoose.set('strictQuery', false);

//morgans for logs

if (mode == "development") app.use(morgan("combined"))
console.log(mode)
app.use(cors({origin: '*'}))
app.use(bodyParser.json({limit:'50mb', type:'application/json'}))
app.use(bodyParser.urlencoded({ extended: true }));

// connection to instance. IF you are in mode Dev,use a development DB.IF you are doing Test,use a TESTING DB.IF you are in Production ,use a PRODUCTION DB.

try {
    if (mode === "development") {
      mongoose
        .connect(process.env.DEVELLOPMENT_DB, { useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => {
          console.log("MONGODB \nDEV DB Connected");
        });
        app.use("/api/v1/", allRoutes );

    } else if (mode === "test") {
      mongoose
        .connect(process.env.TEST_DB, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => {
          // console.log("MONGODB \nTEST DB Connected");
          app.use("/api/v1/", allRoutes2 );
        });
    } else if (mode === "production") {
      mongoose
        .connect(process.env.PRODUCTION_DB, { useNewUrlParser: true , useUnifiedTopology: true})
        .then((result) => {
          console.log(" MONGODB \nPROD DB Connected");
        });
        app.use("/api/v1/", allRoutes );
    }



   
    //app routes
    

    app.listen(port, () => {
        console.log(`The server is running on port ${port}`);
      });
    } catch (error) {
      console.log(error);
    }








// app.listen(port, ()=>{
//     console.log(`Server listening at http://${host}:${port}`)
// })


app.get("/",(req,res)=>{

    res.status(200).send(`<h1> WELCOME TO MY BACKEND SERVER page</h1>`)
})

export default app;