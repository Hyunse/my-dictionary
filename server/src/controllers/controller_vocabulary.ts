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
          userId: id
        }
      });

      res.send({
        ok: true,
        data: vocabularies
      });
    }
  );

  public save = asyncHandler(async (req: Request, res: Response) => {
    // Param
    const word = req.body.word;
    const format = req.body.format;
    const definition = req.body.definition;
    const user = req.body.user;

    const duplicatedVocabulary = await Models.vocabulary.findOne({
      where: {
        id: user.id,
        word: word
      }
    });

    if (duplicatedVocabulary) {
      throw {
        ok: false,
        status: 409,
        message: `The word already exist.`,
        token: null
      };
    }

    // Add newVocabulary
    const newVocabulary = await Models.vocabulary.create({
      userId: user.id,
      word,
      format,
      definition
    });

    res.send(newVocabulary);
  });

  public delete = asyncHandler(async (req: Request, res: Response) => {
    const wordId = req.body.id;
    const user = req.body.user;

    const result = await Models.vocabulary.destroy({
      where: {
        id: wordId,
        userId: user.id
      }
    });

    if(result < 1) {
      throw {
        ok: false,
        status: 404,
        message: `The word couldn't be found.`
      }
    }

    res.send({
      ok: true,
      message: `success to delete`
    });
  });
}

export default new VocabularyController();
