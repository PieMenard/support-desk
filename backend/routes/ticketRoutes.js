import express from 'express';
import protect from '../middleware/authMiddleware.js';
import {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
} from '../controllers/ticketController.js';

const ticketRouter = express.Router();

ticketRouter.get('/', protect, getTickets);
ticketRouter.post('/', protect, createTicket);
ticketRouter.get('/:id', protect, getTicket);
ticketRouter.delete('/:id', protect, deleteTicket);
ticketRouter.put('/:id', protect, updateTicket);
export default ticketRouter;
