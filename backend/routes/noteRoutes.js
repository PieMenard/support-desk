import express from 'express';
import protect from '../middleware/authMiddleware.js';
import { getNotes, addNote } from '../controllers/noteControllers.js';

const router = express.Router({ mergeParams: true });

router.get('/', protect, getNotes);
router.post('/', protect, addNote);

export default router;
