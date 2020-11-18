import React, { Component } from 'react';
import axios from 'axios';

// import { Link } from 'react-router-dom';

const Timeslot = props => (
  <tr>
    <td>{props.timeslot.name}</td>
    <td>{props.timeslot.start}</td>
    <td>{props.timeslot.end}</td>
   {/* <td>
    <Link className="btn btn-warning mr-3" to={"/timeslot/edit/"+props.timeslot._id}>Edit</Link> 
       <a className="btn btn-danger" href="#" onClick={() => { props.deleteTimeslot(props.timeslot._id) }}>delete</a>
    </td> */}
    <td>
    <a className="btn btn-warning mr-3" href={"/timeslot/edit/"+props.timeslot._id}>Edit</a> 
       <a className="btn btn-danger" href="#" onClick={() => { props.deleteTimeslot(props.timeslot._id) }}>delete</a>
    </td>
  </tr>
)

export default class TimeslotList extends Component {
  constructor(props) {
    super(props);

    this.deleteTimeslot = this.deleteTimeslot.bind(this)

    this.state = {timeslots: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/timeslots/')
      .then(response => {
        this.setState({ timeslots: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTimeslot(id) {
    axios.delete('http://localhost:5000/api/timeslots/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      timeslots: this.state.timeslots.filter(el => el._id !== id)
    })
  }

  timeslotList() {
    return this.state.timeslots.map(currenttimeslot => {
      return <Timeslot timeslot={currenttimeslot} deleteTimeslot={this.deleteTimeslot} key={currenttimeslot._id}/>;
    })
  }

  render() {
    return (
      <div>
        
        <table className="table text-center table-dark">
          <thead className="thead-dark ">
            <tr>
              <th>Name</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.timeslotList() }
          </tbody>
        </table>
      </div>
    )
  }
}