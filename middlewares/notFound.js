const notFound = (req , res)=>{
    return res.status(404).json({msg : "required route is not found!"});
}

export default notFound;