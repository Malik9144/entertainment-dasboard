import { Router, Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth.js';
import logger from '../config/logger.js';

const router = Router();

router.get('/kpi', async (req: AuthRequest, res: Response) => {
  try {
    res.json({
      success: true,
      data: {
        totalRevenue: 125000,
        totalEvents: 24,
        totalCustomers: 450,
        equipmentUtilization: 78,
      },
    });
  } catch (error: any) {
    logger.error('KPI fetch error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get('/overview', async (req: AuthRequest, res: Response) => {
  try {
    res.json({
      success: true,
      data: {
        upcomingEvents: 5,
        pendingRevenue: 45000,
        equipmentAvailable: 34,
        activeCustomers: 120,
      },
    });
  } catch (error: any) {
    logger.error('Overview fetch error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
