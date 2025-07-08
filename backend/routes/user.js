import express from 'express';
import User from '../models/User.js';
import { verifyToken, requireRole } from '../utils/authMiddleware.js';

const router = express.Router();

// Get all users (admin only)
router.get('/', verifyToken, requireRole(['admin']), async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get current user profile
router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
