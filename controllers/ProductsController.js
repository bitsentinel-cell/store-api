'use strict'
import Product from "../models/Product.js";
const getAllProducts = async (req,res)=>{
    try{
        const products = await Product.find(req.query);
        return res.status(200).json({products, nbHits:products.length});

    }catch (error) {
        return res.status(500).json({msg : "something went wrong!!"})
    }
}
const createProducts = async (req,res)=>{
    try {
        const {name , price , rating , company , featured} = req.body;
        const createProduct = await Product.create({
            name : name,
            price: price,
            rating: rating,
            featured: featured,
            company: company
        });
        createProduct.save();
        return res.status(200).json({msg : 'product is created'});

    } catch (error) {
        return res.status(500).json({msg : 'server got internal error'})
    }
}

export {
    getAllProducts,
    createProducts
}