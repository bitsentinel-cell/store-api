import mongoose from "mongoose";

const dbconnection = (url) =>{
    return  mongoose.connect(url);
}

export default dbconnection;