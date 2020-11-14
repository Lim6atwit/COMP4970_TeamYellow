const pool = require("../../config/db");

module.exports = {
  InsertRoom: (data, callBack) => {
    
    pool.query(
      `insert into room(roomName,capacity) 
                values(?,?)`,
      [
        data.roomName,
        data.capacity,
       
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
 
  QueryRoomById: (id, callBack) => 
  {
    pool.query(
      `SELECT * FROM room WHERE id = ${id}`,
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

 
  ModifyRoomById: (id, room, callBack) => {
    pool.query(
      "UPDATE room SET roomName = ?, capacity = ? WHERE id = ?",
      [room.roomName, room.capacity, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          callBack(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found room with the id
          callBack({ error: "not_found" }, null);
          return;
        }
  
        console.log("updated room: ", { id: id, room });
        callBack(null, { id: id, room });
      }
    );
  },


  
  deleteRoom:(id, callBack) => {
    pool.query("DELETE FROM room WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callBack(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found room with the id
        callBack({ error: "not_found" }, null);
        return;
      }
  
      console.log("deleted room with id: ", id);
      callBack(null, res);
    });
  
  },

}
