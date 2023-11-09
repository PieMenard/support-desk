import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Ticket from '../models/ticketModel.js';

const getTickets = asyncHandler(async (req, res) => {
  //get user from token
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('user not found');
  }

  const tickets = await Ticket.find({ user: req.user.id });

  res.status(200).json(tickets);
});

const createTicket = asyncHandler(async (req, res) => {
  const { product, description, status } = req.body;
  if (!product || !description) {
    res.status(400);
    throw new Error('please add product and description');
  }

  //get user from token
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('user not found');
  }

  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status,
  });

  res.status(200).json(ticket);
});

export { getTickets, createTicket };
