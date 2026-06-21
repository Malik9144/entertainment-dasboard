import { Router, Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
import logger from '../config/logger.js';

const router = Router();

router.get('/dashboard', async (req: AuthRequest, res: Response) => {
  try {
    res.json({
      success: true,
      data: {
        totalRevenue: 125000,
        monthlyRevenue: 45000,
        bySource: {
          events: 95000,
          equipment: 20000,
          services: 10000,
        },
      },
    });
  } catch (error: any) {
    logger.error('Revenue fetch error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/breakdown', async (req: AuthRequest, res: Response) => {
  try {
    res.json({
      success: true,
      data: [
        { source: 'Events', amount: 95000, percentage: 76 },
        { source: 'Equipment', amount: 20000, percentage: 16 },
        { source: 'Services', amount: 10000, percentage: 8 },
      ],
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
