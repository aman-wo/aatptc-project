const express=require("express");
const router=express.Router();


const {
getDownloads,
getSingleDownload,
createDownload,
updateDownload,
DeleteDownload
}=require("../controllers/downloadController");


const verifyToken=require("../middleware/authMiddleware");

const isAdmin=require("../middleware/adminMiddleware");
const validateDownload = require("../validation/downloadValidation");
const { deleteDownload } = require("../models/downloadModel");



router.get("/",getDownloads);
router.get("/:id",getSingleDownload);
router.post(
"/",
verifyToken,
isAdmin,
validateDownload,
createDownload
);
router.put("/:id", verifyToken, isAdmin, validateDownload, updateDownload);
router.delete("/:id", verifyToken, isAdmin, validateDownload, deleteDownload);


module.exports=router;