const router = require("express").Router();

const {
  Insert,
  QueryRoomById,
  QueryRoom,
  ModifyRoomById,
  deleteRoom,
 

 
} = require("./room.controller");

router.post("/", Insert);

// Retrieve all Rooms
router.get("/", QueryRoom);




// Retrieve a single Room with roomid
router.get("/:id", QueryRoomById);

// Update a room with roomid
router.put("/:id", ModifyRoomById);

// Delete a room with id
router.delete("/:id", deleteRoom);


module.exports = router; 