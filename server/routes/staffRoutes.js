const express=require("express");
const router=express.Router();
const createUpload = require("../middleware/uploadMiddleware");
const uploadStaff = createUpload("staff");

const {
getStaff, getSingleStaff, createStaff, updateStaff,deleteStaff  
}=require("../controllers/staffController");


const verifyToken=require("../middleware/authMiddleware");

const isAdmin=require("../middleware/adminMiddleware");

router.get("/", verifyToken, isAdmin, getStaff);
router.get("/:id", verifyToken, isAdmin, getSingleStaff);
router.post("/", verifyToken, isAdmin, uploadStaff.single("image"), createStaff);
router.put("/:id", verifyToken, isAdmin, updateStaff);
router.delete("/:id", verifyToken, isAdmin, deleteStaff);


module.exports = router;