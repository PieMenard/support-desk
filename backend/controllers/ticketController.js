import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Ticket from '../models/ticketModel.js';

const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'get tickets' });
});

const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'create ticket' });
});

export { getTickets, createTicket };
