import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import userController from '../controllers/controller_user';

const router: Router = Router();

router.get('/users', asyncHandler(userController.findAllUsers));

router.post('/user/signIn', asyncHandler(userController.signInUser));

router.post('/user/signUp', asyncHandler(userController.signUpUser));

export default router;
