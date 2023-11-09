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

const getTicket = asyncHandler(async (req, res) => {
  //get user from token
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404);
    throw new Error('user not found');
  }

  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error('ticket not found');
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized');
  }

  res.status(200).json(ticket);
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

const deleteTicket = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error('ticket not found');
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized');
  }

  await ticket.remove();

  res.status(200).json({ success: true });
});

const updateTicket = asyncHandler(async (req, res) => {
  //get user from token
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(404);
    throw new Error('user not found');
  }

  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error('ticket not found');
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized');
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedTicket);
});

export { getTickets, createTicket, getTicket, deleteTicket, updateTicket };
