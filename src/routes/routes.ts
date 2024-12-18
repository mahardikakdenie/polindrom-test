// user.routes.ts

import { Router } from 'express';
import { createPolindromController, getAllPolindromsController } from '../controllers/polindrom.controller';

const router = Router();

// Define routes
router.get('/', getAllPolindromsController);
router.post('/', createPolindromController);

export default router;
