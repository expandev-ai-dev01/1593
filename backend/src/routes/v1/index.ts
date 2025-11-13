import { Router } from 'express';
import externalRoutes from '@/routes/v1/externalRoutes';
import internalRoutes from '@/routes/v1/internalRoutes';

const router = Router();

// External (public) routes
router.use('/external', externalRoutes);

// Internal (authenticated) routes
router.use('/internal', internalRoutes);

export default router;
