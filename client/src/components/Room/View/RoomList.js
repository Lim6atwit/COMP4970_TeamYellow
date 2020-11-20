import React, { Component } from 'react';
import axios from 'axios';

// import { Link } from 'react-router-dom';

const Room = props => (
  <tr>
    <td>{props.room.name}</td>
    <td>{props.room.capacity}</td>
   {/* <td>
    <Link className="btn btn-warning mr-3" to={"/room/edit/"+props.room._id}>Edit</Link> 
       <a className="btn btn-danger" href="#" onClick={() => { props.deleteRoom(props.room._id) }}>delete</a>
    </td> */}
    <td>
    <a className="btn btn-warning mr-3" href={"/room/edit/"+props.room._id}>Edit</a> 
       <a className="btn btn-danger" href={"/room/delete/"+props.room._id}>delete</a>
    </td>
  </tr>
)

export default class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {rooms: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/rooms/')
      .then(response => {
        this.setState({ rooms: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  roomList() {
    return this.state.rooms.map(currentroom => {
      return <Room room={currentroom} key={currentroom._id}/>;
    })
  }

  render() {
    return (
      <div>
        
        <table className="table text-center table-dark">
          <thead className="thead-dark ">
            <tr>
              <th>Room Name</th>
              <th>Capacity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.roomList() }
          </tbody>
        </table>
      </div>
    )
  }
}