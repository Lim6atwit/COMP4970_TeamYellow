import React, { Component } from 'react';
import axios from 'axios';
import UI_Facade from '../../../UI_Facade';

// import { Link } from 'react-router-dom';

const Speaker = props => (
  <tr>
    <td>{props.speaker.name}</td>
    <td>{props.speaker.email}</td>
    <td>{props.speaker.phone}</td>
    <td>{props.speaker.dayphone}</td>
   {/* <td>
    <Link className="btn btn-warning mr-3" to={"/speaker/edit/"+props.speaker._id}>Edit</Link> 
       <a className="btn btn-danger" href="#" onClick={() => { props.deleteSpeaker(props.speaker._id) }}>delete</a>
    </td> */}
    <td>
    <a className="btn btn-warning mr-3" href={"/speaker/edit/"+props.speaker._id}>Edit</a> 
       <a className="btn btn-danger" href={"/speaker/delete/"+props.speaker._id}>delete</a>
    </td>
  </tr>
)

export default class SpeakerList extends Component {
  constructor(props) {
    super(props);

    this.state = {speakers: []};
  }

  componentDidMount() {
    this.callRooms();
    /*
    axios.get('http://localhost:5000/api/speakers/')
      .then(response => {
        this.setState({ speakers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
      */
  }

  callSpeakers () {
    const toDB = new UI_Facade();
    toDB.retrieveSpeakers().then(result => {

      this.setState({ speakers: result});
      console.log(result);
    });
  }

  speakerList() {
    return this.state.speakers.map(currentspeaker => {
      return <Speaker speaker={currentspeaker} key={currentspeaker._id}/>;
    })
  }

  render() {
    return (
      <div>
        
        <table className="table text-center table-dark">
          <thead className="thead-dark ">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Day Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.speakerList() }
          </tbody>
        </table>
      </div>
    )
  }
}