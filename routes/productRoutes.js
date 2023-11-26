import express from "express";

const router = express.Router();
import {getAllProducts , createProducts} from '../controllers/ProductsController.js'

router.get('/' , getAllProducts);
router.post('/' , createProducts);


export default router;
