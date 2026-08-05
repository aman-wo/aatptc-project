const validateGallery = (req,res,next)=>{

    const {title,image}=req.body;

    if(!title || !image){

    return res.status(400).json({
    success:false,
    message:"Title and image are required."
    });

    }

    next();

    };

    module.exports=validateGallery;
