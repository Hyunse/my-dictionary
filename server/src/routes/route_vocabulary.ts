import { Request, Response } from 'express';
import { Router } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import vocabularyController from '../controllers/controller_vocabulary';

const router: Router = Router();

router.get(
  '/vocabulary',
  asyncHandler(async (req: Request, res: Response) => {
    // Param
    const userId = req.body.user.id;

    const result = await vocabularyController.findAllVocabulary(userId);

    res.send({
      ok: true,
      data: result,
    });
  })
);

router.post(
  '/vocabulary/save',
  asyncHandler(async (req: Request, res: Response) => {
    // Param
    const userId = req.body.user.id;
    const word = req.body.word;

    const result = await vocabularyController.save(userId, word);

    if (!result) new Error('Save failed');

    res.send({
      ok: true,
      status: 200,
      data: result,
      message: `Successfully Saved`,
    });
  })
);

router.delete(
  '/vocabulary',
  asyncHandler(async (req: Request, res: Response) => {
    // Param
    const userId = req.body.user.id;
    const wordId = req.body.wordId;

    const result = await vocabularyController.delete(userId, wordId);

    if (result < -1) new Error(`The word couldn't be found.`);

    res.send({
      ok: true,
      message: `success to delete`,
    });
  })
);

export default router;
