import { Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import Models from '../models';
// import { Vocabulary } from '../models/Vocabulary';
// import JwtUtil from '../utils/util_jwt';

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
    let user = req.body.user;

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
        message: `Word already exist.`,
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
}

export default new VocabularyController();
