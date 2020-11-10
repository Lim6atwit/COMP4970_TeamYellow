const pool = require("../../config/db");

module.exports = {
  InsertRoom: (data, callBack) => {
    pool.query(
      `insert into room(room_name,seat_count) 
                values(?,?)`,
      [
        data.room_name,
        data.seat_count,
       
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
      [],
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
      "UPDATE room SET room_name = ?, seat_count = ? WHERE id = ?",
      [room.room_name, room.seat_count, id],
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
