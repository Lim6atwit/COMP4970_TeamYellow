import Database_Facade from "./Database_Facade.js";
import React, {Component} from 'react';


class UI_Facade extends Component{
    
    constructor(props) {
        super(props);
        this.state = { DB : new Database_Facade()};
    }

    render() {
        console.log('------------------ Rendered UI_Facade ------------------');
    }

    async addSession(session) {
        if(this.state.DB.verifySession(session)) {
            
            await this.state.DB.insertSession(session);
            var updatedSessions = await this.state.DB.querySessions();
            return updatedSessions;
             
        }
        return null;
    }

    async addTimeslot(timeslot) {
        if(this.state.DB.verifyTimeslot(timeslot)) {
            
            await this.state.DB.insertTimeslot(timeslot);
            var updatedTimeslots = await this.state.DB.queryTimeslots();
            return updatedTimeslots;
             
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

    async addSpeaker(speaker) {
        if(this.state.DB.verifySpeaker(speaker)) {
            
            await this.state.DB.insertSpeaker(speaker);
            var updatedSpeakers = await this.state.DB.querySpeakers();
            return updatedSpeakers;
             
        }
        return null;
    }
        

    async editSession(session, sessionId) {
        if(this.state.DB.verifySession(session)) {
        
            await this.state.DB.modifySession(session, sessionId);

            return await this.state.DB.querySessions(); 
        }
        return null;
    }

    async editTimeslot(timeslot, timeslotId) {
        if(this.state.DB.verifyTimeslot(timeslot)) {
        
            this.state.DB.modifyTimeslot(timeslot, timeslotId); 
            return await this.state.DB.queryTimeslots();
        }
        return null;
    }

    async editRoom(room, roomId) {
        if(this.state.DB.verifyRoom(room)) {
        
            this.state.DB.modifyRoom(room, roomId);
            return await this.state.DB.queryRooms();
        }
        return null;
    }

    async editSpeaker(speaker, speakerId) {
        if(this.state.DB.verifySpeaker(speaker)) {
        
            this.state.DB.modifySpeaker(speaker, speakerId)
            return await this.state.DB.querySpeakers();
        }
        return null;
    }


    async removeSession(sessionId) {
        if(this.state.DB.removeSession(sessionId)) {
            return this.state.DB.querySessions();
        }
        return null;
       
    }

    async removeTimeslot(timeslotId) {
        if(this.state.DB.removeTimeslot(timeslotId)) {
            return this.state.DB.queryTimeslots();
        }
        return null;
    }

    async removeRoom(roomId) {
        if(this.state.DB.removeRoom(roomId)) {
            return this.state.DB.queryRooms();
        }
        return null;
    }

    async removeSpeaker(speakerId) {
        if(this.state.DB.removeSpeaker(speakerId)) {
            return this.state.DB.querySpeakers();
        }
        return null;
    }


    async retrieveSessions() {
        return await this.state.DB.querySessions();
    }

    async retrieveTimeslots() {
        return await this.state.DB.queryTimeslots();
    }

    async retrieveRooms() {
        return await this.state.DB.queryRooms();
    }

    async retrieveSpeakers() {
        return await this.state.DB.querySpeakers();
    }


    async retrieveSession(sessionId) {
        return await this.state.DB.querySession(sessionId);
    }

    async retrieveTimeslot(timeslotId) {
        return await this.state.DB.queryTimeslot(timeslotId);
    }

    async retrieveRoom(roomId) {
        return await this.state.DB.queryRoom(roomId);
    }

    async retrieveSpeaker(speakerId) {
        return await this.state.DB.querySpeaker(speakerId);
    }


    async retrieveSessionsByTimeslot() {
        return await this.state.DB.querySessionsByTimeslot();
    }

    async retrieveSessionsByRoom() {
        return await this.state.DB.querySessionsByRoom();
    }

    async retrieveSessionsBySpeaker() {
        return await this.state.DB.querySessionsBySpeaker();
    }
}

export default UI_Facade;
