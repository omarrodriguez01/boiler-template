const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require("cors")


const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.use(cors())

//All GET Requests
// Get all guests
app.get('/api/guests', async (req, res) => {
  try {
    const guests = await prisma.guest.findMany();
    res.json(guests);
  } catch (error) {
    console.error('Error retrieving guests:', error);
    res.status(500).json({ error: 'An error occurred while retrieving guests' });
  }
});

// Get all rooms
app.get('/api/rooms', async (req, res) => {
  try {
    const rooms = await prisma.room.findMany();
    res.json(rooms);
  } catch (error) {
    console.error('Error retrieving rooms:', error);
    res.status(500).json({ error: 'An error occurred while retrieving rooms' });
  }
});

// Get all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany();
    res.json(bookings);
  } catch (error) {
    console.error('Error retrieving bookings:', error);
    res.status(500).json({ error: 'An error occurred while retrieving bookings' });
  }
});

// Get all services
app.get('/api/services', async (req, res) => {
  try {
    const services = await prisma.service.findMany();
    res.json(services);
  } catch (error) {
    console.error('Error retrieving services:', error);
    res.status(500).json({ error: 'An error occurred while retrieving services' });
  }
});

// Get all payments
app.get('/api/payments', async (req, res) => {
  try {
    const payments = await prisma.payment.findMany();
    res.json(payments);
  } catch (error) {
    console.error('Error retrieving payments:', error);
    res.status(500).json({ error: 'An error occurred while retrieving payments' });
  }
});

// All POST Requests
// POST /api/guestpost - Create a new guest
app.post('/api/guestpost', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, address } = req.body;
    const guest = await prisma.guest.create({
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
      },
    });
    res.json(guest);
  } catch (error) {
    console.error('Error creating guest:', error);
    res.status(500).json({ error: 'An error occurred while creating a guest.' });
  }
});

// POST /api/roompost - Create a new room
app.post('/api/roompost', async (req, res) => {
  try {
    const { roomNumber, roomType, occupancyLimit, pricePerNight, isAvailable } = req.body;
    const room = await prisma.room.create({
      data: {
        roomNumber,
        roomType,
        occupancyLimit,
        pricePerNight,
        isAvailable,
      },
    });
    res.json(room);
  } catch (error) {
    console.error('Error creating room:', error);
    res.status(500).json({ error: 'An error occurred while creating a room.' });
  }
});

// POST /api/bookingpost - Create a new booking
app.post('/api/bookingpost', async (req, res) => {
  try {
    const { checkInDate, checkOutDate, guestId, roomNumber } = req.body;
    const booking = await prisma.booking.create({
      data: {
        checkInDate,
        checkOutDate,
        guest: { connect: { id: guestId } },
        room: { connect: { roomNumber } },
      },
    });
    res.json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'An error occurred while creating a booking.' });
  }
});

// POST /api/servicepost - Create a new service
app.post('/api/servicepost', async (req, res) => {
  try {
    const { name, price } = req.body;
    const service = await prisma.service.create({
      data: {
        name,
        price,
      },
    });
    res.json(service);
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ error: 'An error occurred while creating a service.' });
  }
});

// POST /api/paymentpost - Create a new payment
app.post('/api/paymentpost', async (req, res) => {
  try {
    const { paymentDate, totalAmount, bookingId } = req.body;
    const payment = await prisma.payment.create({
      data: {
        paymentDate,
        totalAmount,
        booking: { connect: { id: bookingId } },
      },
    });
    res.json(payment);
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ error: 'An error occurred while creating a payment.' });
  }
});

// All PUT Requests
// Update a guest by ID
app.put('/api/guests/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, phoneNumber, address } = req.body;

  try {
    const updatedGuest = await prisma.guest.update({
      where: { id: parseInt(id) },
      data: {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
      },
    });
    res.json(updatedGuest);
  } catch (error) {
    console.error('Error updating guest:', error);
    res.status(500).json({ error: 'Failed to update guest.' });
  }
});

// Update a room by ID
app.put('/api/rooms/:id', async (req, res) => {
  const { id } = req.params;
  const { roomNumber, roomType, occupancyLimit, pricePerNight, isAvailable } = req.body;

  try {
    const updatedRoom = await prisma.room.update({
      where: { id: parseInt(id) },
      data: {
        roomNumber: parseInt(roomNumber),
        roomType,
        occupancyLimit: parseInt(occupancyLimit),
        pricePerNight: parseFloat(pricePerNight),
        isAvailable,
      },
    });
    res.json(updatedRoom);
  } catch (error) {
    console.error('Error updating room:', error);
    res.status(500).json({ error: 'Failed to update room.' });
  }
});

// Update a booking by ID
app.put('/api/bookings/:id', async (req, res) => {
  const { id } = req.params;
  const { checkInDate, checkOutDate, guestId, roomNumber } = req.body;

  try {
    const updatedBooking = await prisma.booking.update({
      where: { id: parseInt(id) },
      data: {
        checkInDate: new Date(checkInDate),
        checkOutDate: new Date(checkOutDate),
        guest: { connect: { id: parseInt(guestId) } },
        room: { connect: { roomNumber: parseInt(roomNumber) } },
      },
    });
    res.json(updatedBooking);
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ error: 'Failed to update booking.' });
  }
});

// Update a service by ID
app.put('/api/services/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    const updatedService = await prisma.service.update({
      where: { id: parseInt(id) },
      data: {
        name,
        price: parseFloat(price),
      },
    });
    res.json(updatedService);
  } catch (error) {
    console.error('Error updating service:', error);
    res.status(500).json({ error: 'Failed to update service.' });
  }
});

// Update a payment by ID
app.put('/api/payments/:id', async (req, res) => {
  const { id } = req.params;
  const { paymentDate, totalAmount, bookingId } = req.body;

  try {
    const updatedPayment = await prisma.payment.update({
      where: { id: parseInt(id) },
      data: {
        paymentDate: new Date(paymentDate),
        totalAmount: parseFloat(totalAmount),
        booking: { connect: { id: parseInt(bookingId) } },
      },
    });
    res.json(updatedPayment);
  } catch (error) {
    console.error('Error updating payment:', error);
    res.status(500).json({ error: 'Failed to update payment.' });
  }
});

//All DELETE Requests
// DELETE endpoint for deleting a guest by ID
app.delete('/api/guestsdelete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedGuest = await prisma.guest.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json(deletedGuest);
  } catch (error) {
    console.error('Error deleting guest:', error);
    res.status(500).json({ error: 'Error deleting guest' });
  }
});

// DELETE endpoint for deleting a room by ID
app.delete('/api/roomsdelete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRoom = await prisma.room.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json(deletedRoom);
  } catch (error) {
    console.error('Error deleting room:', error);
    res.status(500).json({ error: 'Error deleting room' });
  }
});

// DELETE endpoint for deleting a booking by ID
app.delete('/api/bookingsdelete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBooking = await prisma.booking.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json(deletedBooking);
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ error: 'Error deleting booking' });
  }
});

// DELETE endpoint for deleting a service by ID
app.delete('/api/servicesdelete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedService = await prisma.service.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json(deletedService);
  } catch (error) {
    console.error('Error deleting service:', error);
    res.status(500).json({ error: 'Error deleting service' });
  }
});

// DELETE endpoint for deleting a payment by ID
app.delete('/api/paymentsdelete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPayment = await prisma.payment.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.json(deletedPayment);
  } catch (error) {
    console.error('Error deleting payment:', error);
    res.status(500).json({ error: 'Error deleting payment' });
  }
});

// Start the server
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});