import { Router, Request, Response } from 'express';
import logger from '../config/logger.js';

const router = Router();

router.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    if (!email || !password || !firstName || !lastName) {
      res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
      return;
    }

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
    });
  } catch (error: any) {
    logger.error('Registration error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: 'Email and password required',
      });
      return;
    }

    const token = 'dummy_token';
    res.json({
      success: true,
      message: 'Login successful',
      token,
    });
  } catch (error: any) {
    logger.error('Login error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post('/logout', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Logout successful' });
});

export default router;
