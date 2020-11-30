import React, { Component } from 'react';
import axios from 'axios';
import UI_Facade from '../../../UI_Facade';

// import { Link } from 'react-router-dom';

const Room = props => (
  <tr>
    <td>{props.room.room_name}</td>
    <td>{props.room.seat_count}</td>
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
    this.callRooms();
    /*
    axios.get('http://localhost:5000/api/rooms/')
      .then(response => {
        this.setState({ rooms: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
    */
  }

  callRooms () {
    const toDB = new UI_Facade();
    toDB.retrieveRooms().then(result => {

      this.setState({ rooms: result});
      console.log(result);
    });
    
  }
  
  roomList() {
    
    return this.state.rooms.map(currentroom => {
      return <Room room={currentroom} key={currentroom.room_id}/>;
    });
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