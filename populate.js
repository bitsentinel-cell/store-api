import dotenv from 'dotenv';
dotenv.config();
import Product from "./models/Product.js";
import jsonProducts from './products.json' assert { type: "json" };
import dbconnection from "./db/dbconnection.js";

const start = async () => {
    try {
        await dbconnection(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Success!!!!')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()