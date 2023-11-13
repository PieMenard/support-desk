import express from 'express';
import protect from '../middleware/authMiddleware.js';
import {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
} from '../controllers/ticketController.js';
import noteRoutes from './noteRoutes.js';

const router = express.Router();

router.use('/:ticketId/notes', noteRoutes);

router.get('/', protect, getTickets);
router.post('/', protect, createTicket);
router.get('/:id', protect, getTicket);
router.delete('/:id', protect, deleteTicket);
router.put('/:id', protect, updateTicket);
export default router;
