const express=require("express");
const router=express.Router();


const {
getEvents,
getEvent,
createEvent, updateEvent, deleteEvent
}=require("../controllers/eventController");


const verifyToken=require("../middleware/authMiddleware");

const isAdmin=require("../middleware/adminMiddleware");


const validateEvent = require("../validation/eventValidation");
router.get("/", getEvents);

router.get("/:slug", getEvent);

router.post(
  "/",
    verifyToken,
      isAdmin,
        validateEvent,
          createEvent
          );

          router.put(
            "/:slug",
              verifyToken,
                isAdmin,
                  validateEvent,
                    updateEvent
                    );

                    router.delete(
                      "/:slug",
                        verifyToken,
                          isAdmin, deleteEvent
                    );
  module.exports = router;                  