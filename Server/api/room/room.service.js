const pool = require("../../config/db");

module.exports = {
  InsertRoom: (data, callBack) => {
    
    pool.query(
      `insert into room(roomName,seatCount) 
                values(?,?)`,
      [
        data.roomName,
        data.seatCount,
       
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
 
  QueryRoomById: (room_id, callBack) => 
  {
    pool.query(
      `SELECT * FROM room WHERE room_id = ${room_id}`,
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  QueryRoom: callBack => {
    pool.query(
      `SELECT * FROM room`,
      
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

 
  ModifyRoomById: (room_id, room, callBack) => {
    pool.query(
      "UPDATE room SET roomName = ?, seatCount = ? WHERE room_id = ?",
      [room.roomName, room.seatCount, room_id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          callBack(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found room with the room_id
          callBack({ error: "not_found" }, null);
          return;
        }
  
        console.log("updated room: ", { room_id: room_id, room });
        callBack(null, { room_id: room_id, room });
      }
    );
  },


  
  deleteRoom:(room_id, callBack) => {
    pool.query("DELETE FROM room WHERE room_id = ?", room_id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callBack(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found room with the room_id
        callBack({ error: "not_found" }, null);
        return;
      }
  
      console.log("deleted room with room_id: ", room_id);
      callBack(null, res);
    });
  
  },

}
