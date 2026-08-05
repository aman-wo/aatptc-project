const express=require("express");
const router=express.Router();


const {
getStaff, getSingleStaff, createStaff, updateStaff,deleteStaff  
}=require("../controllers/staffController");


const verifyToken=require("../middleware/authMiddleware");

const isAdmin=require("../middleware/adminMiddleware");

router.get("/", getStaff);
router.get("/:id", getSingleStaff);
router.post("/", createStaff);
router.put("/:id", updateStaff);
router.delete("/:id", deleteStaff);


module.exports = router;