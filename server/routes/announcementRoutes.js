const express=require("express");
const router=express.Router();


const {
getAllAnnouncements,
getSingleAnnouncement,
createAnnouncement,
updateAnnouncement,
deleteAnnouncement
}=require("../controllers/announcementController");


const verifyToken=require("../middleware/authMiddleware");
const isAdmin=require("../middleware/adminMiddleware");
const validateAnnouncement = require("../validation/announcementValidation");



router.get("/",getAllAnnouncements);
router.get("/:id",getSingleAnnouncement);
router.post(
"/",
verifyToken,
isAdmin,
validateAnnouncement,
createAnnouncement
);
router.put("/:id", verifyToken, isAdmin, validateAnnouncement, updateAnnouncement);
router.delete("/:id", verifyToken, isAdmin, validateAnnouncement, deleteAnnouncement);


module.exports=router;