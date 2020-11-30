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
router.get("/:room_id", QueryRoomById);

// Update a room with roomid
router.put("/:room_id", ModifyRoomById);

// Delete a room with room_id
router.delete("/:room_id", deleteRoom);


module.exports = router; 
