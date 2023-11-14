import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Get user from token
      req.user = await User.findById(decoded.id).select('-password');
      // Check if a user was found
      if (!req.user) {
        res.status(401);
        throw new Error('Not authorized');
      }

      next(); // Call next to pass control to the next middleware or route handler
    } catch (error) {
      res.status(401); // Use 401 for unauthorized
      throw new Error('Not authorized');
    }
  }

  if (!token) {
    res.status(401); // Use 401 for unauthorized
    throw new Error('Not authorized');
  }
});

export default protect;
