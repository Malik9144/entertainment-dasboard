import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import logger from './config/logger.js';
import { errorHandler } from './middleware/errorHandler.js';
import authRoutes from './routes/auth.routes.js';
import eventRoutes from './routes/events.routes.js';
import revenueRoutes from './routes/revenue.routes.js';
import customerRoutes from './routes/customers.routes.js';
import equipmentRoutes from './routes/equipment.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';
import { authenticateToken } from './middleware/auth.js';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', authenticateToken, dashboardRoutes);
app.use('/api/events', authenticateToken, eventRoutes);
app.use('/api/revenue', authenticateToken, revenueRoutes);
app.use('/api/customers', authenticateToken, customerRoutes);
app.use('/api/equipment', authenticateToken, equipmentRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path,
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

export default app;
