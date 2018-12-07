import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import userController from '../controllers/controller_user';

const router: Router = Router();

router.get('/users', asyncHandler(userController.findAllUsers));

router.post('/user/signIn', asyncHandler(userController.signIn));

router.post('/user/signUp', asyncHandler(userController.signUp));

router.post('/user/update', asyncHandler(userController.update));

export default router;
