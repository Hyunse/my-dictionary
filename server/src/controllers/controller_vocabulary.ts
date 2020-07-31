import { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import Models from '../models';

class VocabularyController {
  constructor() {}

  public findAllVocabulary = asyncHandler(
    async (req: Request, res: Response) => {
      const { id } = req.body.user;

      const vocabularies = await Models.vocabulary.findAll({
        where: {
          userId: id,
        },
      });

      res.send({
        ok: true,
        data: vocabularies,
      });
    }
  );

  public save = asyncHandler(async (userId: number, word: string) => {
    const duplicatedVocabulary = await Models.vocabulary.findOne({
      where: {
        id: userId,
        word: word,
      },
    });

    if (duplicatedVocabulary) {
      throw {
        ok: false,
        status: 409,
        message: `The word already exist.`,
      };
    }

    // Add newVocabulary
    await Models.vocabulary.create({
      userId,
      word,
    });

    return {
      ok: true,
      status: 200,
      message: `Successfully Saved`,
    };
  });

  public delete = asyncHandler(async (req: Request, res: Response) => {
    const wordId = req.body.id;
    const user = req.body.user;

    const result = await Models.vocabulary.destroy({
      where: {
        id: wordId,
        userId: user.id,
      },
    });

    if (result < 1) {
      throw {
        ok: false,
        status: 404,
        message: `The word couldn't be found.`,
      };
    }

    res.send({
      ok: true,
      message: `success to delete`,
    });
  });
}

export default new VocabularyController();
