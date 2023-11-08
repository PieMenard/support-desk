import express from 'express';
import protect from '../middleware/authMiddleware.js';
import { getTickets, createTicket } from '../controllers/ticketController.js';

const ticketRouter = express.Router();

ticketRouter.get('/', protect, getTickets);
ticketRouter.post('/', protect, createTicket);

export default ticketRouter;
