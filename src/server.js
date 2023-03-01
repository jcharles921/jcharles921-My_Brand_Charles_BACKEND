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
// import routeCRUD from "./routes/routeCRUD.js";
// import routeLogin from "./routes/routeLogin.js";
// import routeSignup from "./routes/routeSignup.js"
 import allRoutes from "./routes/allRoutes.js"



// create server instance
const app= express();
const port= process.env.PORT

const host =process.env.HOST
const mode= process.env.ENV
mongoose.set('strictQuery', false);

//morgans for logs

if (mode == "development") app.use(morgan("combined"))
console.log(mode)


// connection to instance. IF you are in mode Dev,use a development DB.IF you are doing Test,use a TESTING DB.IF you are in Production ,use a PRODUCTION DB.

try {
    if (mode === "development") {
      mongoose
        .connect(process.env.DEVELLOPMENT_DB, { useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => {
          console.log("MONGODB \nDEV DB Connected");
        });
    } else if (mode === "test") {
      mongoose
        .connect(process.env.TEST_DB, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => {
          console.log("MONGODB \nTEST DB Connected");
        });
    } else if (mode === "production") {
      mongoose
        .connect(process.env.PRODUCTION_DB, { useNewUrlParser: true , useUnifiedTopology: true})
        .then((result) => {
          console.log(" MONGODB \nPROD DB Connected");
        });
    }



    app.use(cors())
    app.use(bodyParser.json())
    //app routes
    app.use("/api/v1/", allRoutes );

    app.listen(port, () => {
        console.log(`The server is running on port ${port}`);
      });
    } catch (error) {
      console.log(error);
    }








// app.listen(port, ()=>{
//     console.log(`Server listening at http://${host}:${port}`)
// })


// app.get("/",(req,res)=>{

//     res.status(200).send(`<h1> WELCOME TO MY BACKEND SERVER page</h1>`)
// })
