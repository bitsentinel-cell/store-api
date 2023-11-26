const errorHandlerMiddleWare = async (err , req ,res , next)=>{
    console.log(err);
    return res.status(500).json({msg:'something just went wrong'});

}

export default errorHandlerMiddleWare;