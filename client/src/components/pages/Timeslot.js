import React, { Component }  from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as FaIcons from 'react-icons/fa';
import TimeslotList from "../Timeslot/View/TimeslotList";


export default class Timeslot extends Component{
  render() {
  return (
    <Router>
       <div className="container">
        <h3 className="text-center h1 mt-3">Time Slot List</h3>
        <a href="timeslot/create" className="btn btn-success m-4 p-3 text-dark font-weight-bold"> <FaIcons.FaPlus /> Add New Time Slot</a>
          <TimeslotList/>
      </div>
    </Router>
  )
  }
}
