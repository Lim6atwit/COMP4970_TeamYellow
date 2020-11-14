require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const roomRouter = require("./api/room/room.router");
const speakerRouter = require("./api/speaker/speaker.router");
const timeslotRouter = require("./api/timeslot/timeslot.router");



app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))


app.use("/api/room", roomRouter);
app.use("/api/speaker", speakerRouter);
app.use("/api/timeslot", timeslotRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
