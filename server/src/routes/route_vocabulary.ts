import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import vocabularyController from '../controllers/controller_vocabulary';

const router: Router = Router();

router.get('/vocabularies', asyncHandler(vocabularyController.findAllVocabulary));

router.post('/vocabulary/save', asyncHandler(vocabularyController.save));

export default router;