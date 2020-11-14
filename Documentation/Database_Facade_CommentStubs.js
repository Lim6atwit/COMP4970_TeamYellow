class Database_Facade {
    verifySession(session) {
        /*
         *
         *
         */
    }
    verifyTimeslot(timeslot) {
        /*
         * - verify that:
         *     Timeslot name doesn't contain any problematic characters
         *     the start and end time are properly formatted
         *     the end time is after the start time
         *   returns true if all of these are verified, false otherwise
         */
    }
    verifyRoom(room) {
        /*
         * - verify that:
         *     the Room name doesn't contain any problematic characters
         *     the Room capacity is > 0
         *   returns true if all of these are verified, false otherwise
         */
    }
    verifySpeaker(speaker) {
        /*
         * - verify that:
         *       the Speaker's name, cellphone, and dayphone don't contain any problematic characters
         *       Email is properly formatted
         *       Cellphone and Dayphone follow the proper format
         *   returns true if all of these are verified, false otherwise
         */
    }

    insertSession(session) {
        /*
         * - send a POST call to the database
         *   to create a Session with attributes defined by
         *   session
         */
    }
    insertTimeslot(timeslot) {
        /*
         * - send a POST call to the database
         *   to create a Timeslot entity with attributes defined by
         *   timeslot
         */
    }
    insertRoom (room) {
        /*
         * - send a POST call to the database
         *   to create a Room entity with attributes defined by
         *   room
         */
    }
    insertSpeaker (speaker) {
        /*
         * - send a POST call to the database
         *   to create a Speaker entity with attributes defined by
         *   speaker
         */
    }

    modifySession(newSession, sessionId) {
        /*
         * - send an UPDATE call to the database
         *   to modify the Session with id=sessionId with new data
         *   from newSession
         */
    }
    modifyTimeslot(newTimeslot, timeslotId) {
        /*
         * - send an UPDATE call to the database
         *   to modify the Timeslot with id=timeslotId with new data
         *   from newTimeslot
         */
    }
    modifyRoom(newRoom, roomId) {
        /*
         * - send an UPDATE call to the database
         *   to modify the Room with id=roomId with new data
         *   from newRoom
         */
    }
    modifySpeaker(newSpeaker, speakerId) {
        /*
         * - send an UPDATE call to the database
         *   to modify the Speaker with id=speakerId with new data
         *   from newSpeaker
         */
    }

    removeSession(sessionId) {
        /*
         * - send an REMOVE call to the database
         *   to remove the session with id=sessionId
         * - return -1 if error, 0 if success
         */

    }
    removeTimeslot(timeslotId) {
        /*
         * - send an REMOVE call to the database
         *   to remove the timeslot with id=timeslotId
         * - return -1 if error, 0 if success
         */
    }
    removeRoom(roomId) {
        /*
         * - send an REMOVE call to the database
         *   to remove the room with id=roomId
         * - return -1 if error, 0 if success
         */
    }
    removeSpeaker(speakerId) {
        /*
         * - send an REMOVE call to the database
         *   to remove the speaker with id=speakerId
         * - return -1 if error, 0 if success
         */
    }

    querySessions() {
        /*
         * - send an GET call to the database
         *   to return all Sessions from the database
         * 
         */
    }
    queryTimeslots() {
        /*
         * - send an GET call to the database
         *   to return all Timeslots from the database
         */
    }
    queryRooms() {
        /*
         * - send an GET call to the database
         *   to return all Rooms from the database
         */
    }
    querySpeakers() {
        /*
         * - send an GET call to the database
         *   to return all Speakers from the database
         */
    }

    querySession(sessionId) {
        /*
         * - send a GET call to the database
         *   to return a Session with id= sessionId from the database
         */
    }
    queryTimeslot(timeslotId) {
        /*
         * - send a GET call to the database
         *   to return a Timeslot with id= timeslotId from the database
         */
    }
    queryRoom(roomId) {
        /*
         * - send a GET call to the database
         *   to return a Room with id= roomId from the database
         */
    }
    querySpeaker(speakerId) {
        /*
         * - send a GET call to the database
         *   to return a Speaker with id= speakerId from the database
         */
    }

    querySessionsByTimeslot() {
        /*
         * - send a GET call to the database
         *   to return the list of Sessions sorted by Timeslot from the database
         */
    }
    querySessionsByRoom() {
        /*
         * - send a GET call to the database
         *   to return the list of Sessions sorted by Room from the database
         */
    }
    querySessionsBySpeaker() {
        /*
         * - send a GET call to the database
         *   to return the list of Sessions sorted by Speaker from the database
         */
    }

    dbExists() {
        //returns true if the database credentials in dbAccess connect to a existing database
    }
}
