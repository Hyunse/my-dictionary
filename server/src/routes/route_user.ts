import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import userController from '../controllers/controller_user';

const router: Router = Router();

router.get('/users', asyncHandler(userController.findAllUsers));

export default router;
