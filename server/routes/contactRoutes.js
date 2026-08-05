const express=require("express");
const router=express.Router();


const {
getAllContacts,
getContactById,
createContact,
updateContact,
deleteContact
}=require("../controllers/contactController");


const verifyToken=require("../middleware/authMiddleware");
const isAdmin=require("../middleware/adminMiddleware");



router.get("/",verifyToken, isAdmin,getAllContacts);
router.get("/:id",verifyToken, isAdmin, getContactById);
router.post(
"/",
createContact
);
router.put("/:id", verifyToken, isAdmin, updateContact);
router.delete("/:id", verifyToken, isAdmin, deleteContact);


module.exports=router;