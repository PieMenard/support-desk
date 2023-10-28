import express from 'express';
import {
  registerUser,
  loginUser,
  getAllUsers,
  getSingleUser,
  getMe,
} from '../controllers/userController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/me', protect, getMe);
router.get('/:id', getSingleUser);
router.post('/', registerUser);
router.post('/login', loginUser);

export default router;
