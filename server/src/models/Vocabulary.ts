export interface Vocabulary {
  id: number;
  userId: number;
  word: string;
  format: string;
  definition: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * User Table Info
 */
export default (sequelize, DataTypes) => {
  const Vocabulary = sequelize.define(
    'Vocabulary',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: DataTypes.INTEGER,
      word: DataTypes.STRING,
      format: DataTypes.STRING,
      definition: DataTypes.STRING,
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        field: 'updated_at'
      }
    },
    {
      timestamp: true
    }
  );

  Vocabulary.associate = function(models) {};

  return Vocabulary;
};
