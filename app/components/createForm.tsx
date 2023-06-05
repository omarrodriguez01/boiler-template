import React, { useState, useEffect } from 'react';
import axios from 'axios';

type DataItemType = 'Guest' | 'Room' | 'Booking' | 'Service' | 'Payment';

type FormData = {
  [key: string]: string | number;
};

// Necesarios para facilitar el fetch debido a que tienen dependencias entre sí
interface Guest {
  id: number;
  firstName: string;
  lastName: string;
}

interface Room {
  roomNumber: number;
  roomType: string;
}

interface Booking {
  id: number;
  guestId: number;
  roomNumber: number;
}

const DataForm: React.FC = () => {
  const [selectedItemType, setSelectedItemType] = useState<DataItemType | ''>('');
  const [formData, setFormData] = useState<FormData>({});
  const [guests, setGuests] = useState<Guest[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  let formattedData: any = { ...formData} // Variable to store validated and properly formatted item


  // Get all needed items to properly build the items in those that have dependencies.
  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/guests');
        setGuests(response.data);
      } catch (error) {
        console.error('Error fetching guests:', error);
      }
    };

    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/rooms');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchGuests();
    fetchRooms();
    fetchBookings();
  }, []);

  // If there's a change of item to be inputed, change the item type for input needs and clean the slate.
  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItemType(event.target.value as DataItemType);
    setFormData({});
  };

  // If any data is changed, we store it in formData
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateFormData = () => {
    // Perform validation based on the selected item type and form data
    if (selectedItemType === 'Guest') {
      // Validate guest fields
      formattedData.firstName = new String(formData.firstName);
      formattedData.lastName = new String(formData.lastName);
      formattedData.phoneNumber = new String(formData.phoneNumber);
      formattedData.address = new String(formData.address);

      if (!formattedData.firstName || !formattedData.lastName || !formattedData.phoneNumber || !formattedData.address) {
        alert('Please fill in all required fields.');
        return false;
      }
    }

    if (selectedItemType === 'Room') {
      // Validate room fields
      formattedData.roomNumber = parseInt(formData.roomNumber as string);
      formattedData.roomType = new String(formData.roomType);
      formattedData.occupancyLimit = parseInt(formData.occupancyLimit as string);
      formattedData.pricePerNight = parseFloat(formData.pricePerNight as string);
      formattedData.isAvailable = new Boolean(formData.isAvailable);

      if (!formattedData.roomNumber || !formattedData.roomType || !formattedData.occupancyLimit || !formattedData.pricePerNight) {
        alert('Please fill in all required fields.');
        console.log("Testing error")
        return false;
      }
    }

    if (selectedItemType === 'Booking') {
      // Validate booking fields
      formattedData.checkInDate = new Date(formData.checkInDate);
      formattedData.checkOutDate = new Date(formData.checkOutDate);
      formattedData.guestId = parseInt(formData.guestId as string);
      formattedData.roomNumber = parseInt(formData.roomNumber as string);

      if (!formattedData.checkInDate || !formattedData.checkOutDate || !formattedData.guestId || !formattedData.roomNumber) {
        alert('Please fill in all required fields.');
        console.log("Testing error")
        return false;
      }
    }

    if (selectedItemType === 'Service') {
      // Validate payment fields
      formattedData.name = new String(formData.name);
      formattedData.price = parseFloat(formData.price as string);

      if (!formattedData.name || !formattedData.price) {
        alert('Please fill in all required fields.');
        return false;
      }
    }

    if (selectedItemType === 'Payment') {
      // Validate payment fields
      formattedData.paymentDate = new Date(formData.paymentDate);
      formattedData.totalAmount = parseFloat(formData.totalAmount as string);
      formattedData.bookingId = parseInt(formData.bookingId as string);

      if (!formattedData.paymentDate || !formattedData.totalAmount || !formattedData.bookingId) {
        alert('Please fill in all required fields.');
        return false;
      }
    }

    // No validation errors
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateFormData()) {
      return;
    }
    try {
        const response = await axios.post(`http://localhost:3002/api/${selectedItemType.toLowerCase()}post`, formattedData);
        console.log('Data saved successfully:', response.data);
        alert(selectedItemType + " has been saved!")
        // Reset the form data and selected item type
        setFormData({});
      } catch (error) {
        console.error('Error saving data:', error);
      }
  
  };

  const renderFormFields = () => {
    switch (selectedItemType) { // Switch to render the selected item type and all it's needed input fields.
      case 'Guest': 
        return (
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName || ''}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName || ''}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email || ''}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber || ''}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address || ''}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
        );
      case 'Room':
        return (
          <div>
            <input
              type="number"
              name="roomNumber"
              placeholder="Room Number"
              value={formData.roomNumber || ''}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="text"
              name="roomType"
              placeholder="Room Type"
              value={formData.roomType || ''}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="number"
              name="occupancyLimit"
              placeholder="Occupancy Limit"
              value={formData.occupancyLimit || ''}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="number"
              name="pricePerNight"
              placeholder="Price Per Night"
              value={formData.pricePerNight || ''}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable || false}
              onChange={handleInputChange}
              className="input-checkbox"
            />
            <label htmlFor="isAvailable" className="checkbox-label">
              Is Available
            </label>
          </div>
        );
      case 'Booking':
        return (
          <div>
            <input
              type="datetime-local"
              name="checkInDate"
              placeholder="Check-in Date"
              value={formData.checkInDate || ''}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="datetime-local"
              name="checkOutDate"
              placeholder="Check-out Date"
              value={formData.checkOutDate || ''}
              onChange={handleInputChange}
              className="input-field"
            />
            <select
              name="guestId"
              value={formData.guestId || ''}
              onChange={handleInputChange}
              className="input-field"
            >
              <option value="">Select Guest</option>
              {guests.map((guest) => (
                <option key={guest.id} value={guest.id}>
                  {guest.firstName} {guest.lastName}
                </option>
              ))}
            </select>
            <select
              name="roomNumber"
              value={formData.roomNumber || ''}
              onChange={handleInputChange}
              className="input-field"
            >
              <option value="">Select Room</option>
              {rooms.map((room) => (
                <option key={room.roomNumber} value={room.roomNumber}>
                  Room {room.roomNumber}
                </option>
              ))}
            </select>
          </div>
        );
      case 'Service':
        return (
          <div>
            <input
              type="text"
              name="name"
              placeholder="Service Name"
              value={formData.name || ''}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price || ''}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
        );
      case 'Payment':
        return (
          <div>
            <input
              type="datetime-local"
              name="paymentDate"
              placeholder="Payment Date"
              value={formData.paymentDate || ''}
              onChange={handleInputChange}
              className="input-field"
            />
            <input
              type="number"
              name="totalAmount"
              placeholder="Total Amount"
              value={formData.totalAmount || ''}
              onChange={handleInputChange}
              className="input-field"
            />
            <select
              name="bookingId"
              value={formData.bookingId || ''}
              onChange={handleInputChange}
              className="input-field"
            >
              <option value="">Select Booking</option>
              {bookings.map((booking) => (
                <option key={booking.id} value={booking.id}>
                  Booking {booking.id}
                </option>
              ))}
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">POST Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="item-type-select" className="form-label">
            Select Item Type:
          </label>
          <select
            id="item-type-select"
            name="itemType"
            value={selectedItemType}
            onChange={handleDropdownChange}
            className="input-field"
          >
            <option value="">Select...</option>
            <option value="Guest">Guest</option>
            <option value="Room">Room</option>
            <option value="Booking">Booking</option>
            <option value="Service">Service</option>
            <option value="Payment">Payment</option>
          </select>
        </div>
        {renderFormFields()}
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DataForm;
