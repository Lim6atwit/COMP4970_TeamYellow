import Database_Facade from "./Database_Facade.js";
import React, {Component} from 'react';


class UI_Facade extends Component{
    
    constructor(props) {
        super(props);
        this.state = {'DB': new Database_Facade()};
    }

    addSession(session) {
        console.log('verifying');
        if(this.state.DB.verifySession(session)) {
            console.log('inserting');
            if(this.state.DB.insertSession(session)) {
                return this.state.DB.querySessions();
            }
            return null;
        }
        return null;
    }

    addTimeslot(timeslot) {
        if(this.state.DB.verifyTimeslot(timeslot)) {
        
            var promise = this.state.DB.insertTimeslot(timeslot);
            
            promise.then(function(response) {
        
                console.log(response);
                return this.state.DB.queryTimeslots();
        
                })
                
                .catch(function(error) {
                
                console.log(error);
                return null;
                
                })
        }
        return null;
    }

    async addRoom(room) {
       if(this.state.DB.verifyRoom(room)) {
            
            await this.state.DB.insertRoom(room);
            var updatedRooms = await this.state.DB.queryRooms();
            return updatedRooms;
             
        }
        return null;
    }

    addSpeaker(speaker) {
        if(this.state.DB.verifySpeaker(speaker)) {
        
            if(this.state.DB.insertSpeaker(speaker)) {
                return this.state.DB.querySpeakers();
            }
            return null;
        }
        return null;
    }
        

    editSession(session, sessionId) {
        if(this.state.DB.verifySession(session)) {
        
            if(this.state.DB.modifySession(session, sessionId)) {
                return this.state.DB.querySessions();
            }
            return null;
        }
        return null;
    }

    editTimeslot(timeslot, timeslotId) {
        if(this.state.DB.verifyTimeslot(timeslot)) {
        
            if(this.state.DB.modifyTimeslot(timeslot, timeslotId)) {
                return this.state.DB.queryTimeslots();
            }
            return null;
        }
        return null;
    }

    editRoom(room, roomId) {
        if(this.state.DB.verifyRoom(room)) {
        
            if(this.state.DB.modifyRoom(room, roomId)) {
                return this.state.DB.queryRooms();
            }
            return null;
        }
        return null;
    }

    editSpeaker(speaker, speakerId) {
        if(this.state.DB.verifySpeaker(speaker)) {
        
            if(this.state.DB.modifySpeaker(speaker, speakerId)) {
                return this.state.DB.querySpeakers();
            }
            return null;
        }
        return null;
    }


    removeSession(sessionId) {
        if(this.state.DB.removeSession(sessionId)) {
            return this.state.DB.querySessions();
        }
        return null;
       
    }

    removeTimeslot(timeslotId) {
        if(this.state.DB.removeTimeslot(timeslotId)) {
            return this.state.DB.queryTimeslots();
        }
        return null;
    }

    removeRoom(roomId) {
        if(this.state.DB.removeRoom(roomId)) {
            return this.state.DB.queryRooms();
        }
        return null;
    }

    removeSpeaker(speakerId) {
        if(this.state.DB.removeSpeaker(speakerId)) {
            return this.state.DB.querySpeakers();
        }
        return null;
    }


    retrieveSessions() {
        return this.state.DB.querySessions();
    }

    retrieveTimeslots() {
        this.state.DB.queryTimeslots();
    }

    retrieveRooms() {
        this.state.DB.queryRooms();
    }

    retrieveSpeakers() {
        this.state.DB.querySpeakers();
    }


    retrieveSession(sessionId) {
        this.state.DB.querySession(sessionId);
    }

    retrieveTimeslot(timeslotId) {
        this.state.DB.queryTimeslot(timeslotId);
    }

    retrieveRoom(roomId) {
        this.state.DB.queryRoom(roomId);
    }

    retrieveSpeaker(speakerId) {
        this.state.DB.querySpeaker(speakerId);
    }


    retrieveSessionsByTimeslot() {
        this.state.DB.querySessionsByTimeslot();
    }

    retrieveSessionsByRoom() {
        this.state.DB.querySessionsByRoom();
    }

    retrieveSessionsBySpeaker() {
        this.state.DB.querySessionsBySpeaker();
    }
}

export default UI_Facade;
