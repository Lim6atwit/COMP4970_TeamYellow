const pool = require("../../config/db");

module.exports = {
  InsertTimeslot: (data, callBack) => {
    pool.query(
      `insert into timeslot(start_time,end_time) 
      values(?,?)`,
      [
        data.start_time,
        data.end_time,
       
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
 
  QueryTimeslotById: (id, callBack) => 
  {
    pool.query(
      `SELECT id, TIME_FORMAT(start_time, '%h:%i %p') start_time,
      TIME_FORMAT(end_time, '%h:%i %p') end_time
FROM
   timeslot
WHERE
   id = ${id};`,
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  QueryTimeslots: callBack => {
    pool.query(
      `SELECT id, TIME_FORMAT(start_time, '%h:%i %p') start_time,
      TIME_FORMAT(end_time, '%h:%i %p') end_time
FROM
   timeslot`,
      [],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

 
  ModifyTimeslotById: (id, timeslot, callBack) => {
    pool.query(
      "UPDATE timeslot SET start_time = ?, end_time = ? WHERE id = ?",
      [timeslot.start_time, timeslot.end_time, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          callBack(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found timeslot with the id
          callBack({ error: "not_found" }, null);
          return;
        }
  
        console.log("updated timeslot: ", { id: id, timeslot });
        callBack(null, { id: id, timeslot });
      }
    );
  },


  
  deleteTimeslot:(id, callBack) => {
    pool.query("DELETE timeslot timeslot WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callBack(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found timeslot with the id
        callBack({ error: "not_found" }, null);
        return;
      }
  
      console.log("deleted timeslot with id: ", id);
      callBack(null, res);
    });
  
  },

}
