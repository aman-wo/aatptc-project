const express=require("express");
const router=express.Router();
const validateGallery = require("../validation/galleryValidation")

const {
getGalleries,
getSingleGallery,
createGallery,
updateGallery,
deleteGallery
}=require("../controllers/galleryController");


const verifyToken = require("../middleware/authMiddleware");

const isAdmin = require("../middleware/adminMiddleware");



router.get("/",getGalleries);
router.get("/:id",getSingleGallery);
router.post(
"/",
verifyToken,
isAdmin,
validateGallery,
createGallery
);
router.put("/:id", isAdmin, validateGallery, updateGallery)
router.delete("/:id", isAdmin, validateGallery, deleteGallery)


module.exports=router;