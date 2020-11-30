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
 
  QueryTimeslotById: (timeslot_id, callBack) => 
  {
    pool.query(
      `SELECT timeslot_id, TIME_FORMAT(start_time, '%h:%i %p') start_time,
      TIME_FORMAT(end_time, '%h:%i %p') end_time
FROM
   timeslot
WHERE
   timeslot_id = ${timeslot_id};`,
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
      `SELECT timeslot_id, TIME_FORMAT(start_time, '%h:%i %p') start_time,
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

 
  ModifyTimeslotById: (timeslot_id, timeslot, callBack) => {
    pool.query(
      "UPDATE timeslot SET start_time = ?, end_time = ? WHERE timeslot_id = ?",
      [timeslot.start_time, timeslot.end_time, timeslot_id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          callBack(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found timeslot with the timeslot_id
          callBack({ error: "not_found" }, null);
          return;
        }
  
        console.log("updated timeslot: ", { timeslot_id: timeslot_id, timeslot });
        callBack(null, { timeslot_id: timeslot_id, timeslot });
      }
    );
  },


  
  deleteTimeslot:(timeslot_id, callBack) => {
    pool.query("DELETE timeslot timeslot WHERE timeslot_id = ?", timeslot_id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callBack(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found timeslot with the timeslot_id
        callBack({ error: "not_found" }, null);
        return;
      }
  
      console.log("deleted timeslot with timeslot_id: ", timeslot_id);
      callBack(null, res);
    });
  
  },

}
