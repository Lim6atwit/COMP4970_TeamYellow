const pool = require("../../config/db");

module.exports = {
  InsertSpeaker: (data, callBack) => {
    pool.query(
      `insert into speaker(email,cell_phone, day_of_phone,speaker_name) 
                values(?,?,?,?)`,
      [
        data.email,
        data.cell_phone,
        data.day_of_phone,
        data.speaker_name,

       
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
 
  QuerySpeakerById: (speaker_id, callBack) => 
  {
    pool.query(
      `SELECT * FROM speaker WHERE speaker_id = ${speaker_id}`,
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  QuerySpeaker: callBack => {
    pool.query(
      `SELECT * FROM speaker`,
      [],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  QuerySpeakerSorted: callBack =>
  {
    pool.query(
      `SELECT * FROM speaker ORDER BY speaker_name`,
      [],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  ModifySpeakerById: (speaker_id, speaker, callBack) => {
    pool.query(
      "UPDATE speaker SET email = ?, cell_phone = ?,day_of_phone=?,speaker_name = ? WHERE speaker_id = ?",
      [speaker.email, speaker.cell_phone, speaker.day_of_phone,speaker.speaker_name, speaker_id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          callBack(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found speaker with the speaker_id
          callBack({ error: "not_found" }, null);
          return;
        }
  
        console.log("updated speaker: ", { speaker_id: speaker_id, speaker });
        callBack(null, { speaker_id: speaker_id, speaker });
      }
    );
  },


  
  deleteSpeaker:(speaker_id, callBack) => {
    pool.query("DELETE FROM speaker WHERE speaker_id = ?", speaker_id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        callBack(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found room with the speaker_id
        callBack({ error: "not_found" }, null);
        return;
      }
  
      console.log("deleted speaker with speaker_id: ", speaker_id);
      callBack(null, res);
    });
  
  },

}
