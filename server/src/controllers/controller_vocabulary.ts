import Models from '../models';

class VocabularyController {
  constructor() {}

  public findAllVocabulary = async (userId: number) => {
    const result = await Models.vocabulary.findAll({
      where: {
        userId,
      },
    });

    return result;
  };

  public save = async (userId: number, word: string) => {
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
    const result = await Models.vocabulary.create({
      userId,
      word,
    });

    return result;
  };

  public delete = async (userId: number, wordId: number) => {
    const result = await Models.vocabulary.destroy({
      where: {
        id: wordId,
        userId,
      },
    });

    return result;
  };
}

export default new VocabularyController();
