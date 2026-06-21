import { Router, Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
import logger from '../config/logger.js';

const router = Router();

router.get('/', async (req: AuthRequest, res: Response) => {
  try {
    res.json({ success: true, data: [] });
  } catch (error: any) {
    logger.error('Equipment fetch error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/:id', async (req: AuthRequest, res: Response) => {
  try {
    res.json({ success: true, data: {} });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
