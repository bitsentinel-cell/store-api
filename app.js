'use strict'
import express from 'express'
const app = express();
import dbconnection from "./db/dbconnection.js";
import productRoutes from "./routes/productRoutes.js";
import dotenv from 'dotenv';
dotenv.config();
import notFound from "./middlewares/notFound.js";
import errorHandlerMiddleWare from "./middlewares/error-handler.js";
const PORT = process.env.PORT || 8000;



app.use(express.json());

app.use('/api/v1/product' , productRoutes)





app.use(notFound);
app.use(errorHandlerMiddleWare)
const startServer = async () => {
    try {
        await dbconnection(process.env.MONGO_URI)
        app.listen(PORT , ()=>{
            console.log(`express server is up and running on port : ${PORT}`)
        })
    }catch (error) {
        console.log(error)
    }
}
startServer();