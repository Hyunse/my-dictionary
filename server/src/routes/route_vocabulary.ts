import { Request, Response } from 'express';
import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import vocabularyController from '../controllers/controller_vocabulary';

const router: Router = Router();

router.get('/vocabulary', asyncHandler(vocabularyController.findAllVocabulary));

router.post('/vocabulary/save', asyncHandler(async (req: Request, res: Response, next) => {
  // Param
  console.log(req.body.user)
  const userId = req.body.user.id;
  const word = req.body.word;

  const result = await vocabularyController.save(userId, word, next);

  res.send(result);
}));

router.delete('/vocabulary', asyncHandler(vocabularyController.delete));

export default router;