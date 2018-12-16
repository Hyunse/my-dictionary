import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import vocabularyController from '../controllers/controller_vocabulary';

const router: Router = Router();

router.get('/vocabulary', asyncHandler(vocabularyController.findAllVocabulary));

router.post('/vocabulary/save', asyncHandler(vocabularyController.save));

router.delete('/vocabulary', asyncHandler(vocabularyController.delete));

export default router;