// user.routes.ts

import { Router } from 'express';
import { createPolindromController, deletePolindromController, getAllPolindromsController } from '../controllers/polindrom.controller';

const router = Router();

// Define routes
router.get('/', getAllPolindromsController);
router.post('/', createPolindromController);
router.delete('/:id', deletePolindromController);

export default router;
