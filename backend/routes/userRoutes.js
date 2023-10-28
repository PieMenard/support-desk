import express from 'express';
import { registerUser, loginUser, getAllUsers, getSingleUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers)
router.get('/:id', getSingleUser)
router.post('/', registerUser);
router.post('/login', loginUser);

export default router;
