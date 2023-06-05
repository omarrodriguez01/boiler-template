import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GuestAssignment = () => {
  const [guests, setGuests] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');

  useEffect(() => {
    // Fetch guests and rooms data
    const fetchGuests = async () => {
      try {
        const response = await axios.get('http://localhost:3002/guests');
        setGuests(response.data);
      } catch (error) {
        console.error('Error fetching guests:', error);
      }
    };

    /*const fetchRooms = async () => {
      try {
        const response = await axios.get('/rooms');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };*/

    fetchGuests();
    //fetchRooms();
  }, []);

  const handleGuestSelect = (e) => {
    setSelectedGuest(e.target.value);
  };

  const handleRoomSelect = (e) => {
    setSelectedRoom(e.target.value);
  };

  const handleAssignment = async () => {
    if (!selectedGuest || !selectedRoom) return;

    try {
      await axios.put(`/guests/${selectedGuest}/assign`, { roomNumber: selectedRoom });
      // Handle successful assignment, such as showing a success message or updating the UI
      console.log('Guest assigned successfully!');
    } catch (error) {
      // Handle error, such as displaying an error message
      console.error('Error assigning guest:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Guest Assignment</h1>
      <div className="assignment-form">
        <div className="form-group">
          <label htmlFor="guest-select" className="form-label">
            Select Guest:
          </label>
          <select
            id="guest-select"
            className="form-input"
            value={selectedGuest}
            onChange={handleGuestSelect}
          >
            <option value="">Select Guest</option>
            {guests.map((guest) => (
              <option key={guest.id} value={guest.id}>
                {guest.firstName} {guest.lastName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="room-select" className="form-label">
            Select Room:
          </label>
          <select
            id="room-select"
            className="form-input"
            value={selectedRoom}
            onChange={handleRoomSelect}
          >
            <option value="">Select Room</option>
            {rooms.map((room) => (
              <option key={room.roomNumber} value={room.roomNumber}>
                Room {room.roomNumber}
              </option>
            ))}
          </select>
        </div>
        <button className="btn-assign" onClick={handleAssignment}>
          Assign Guest
        </button>
      </div>
    </div>
  );
};

export default GuestAssignment;
