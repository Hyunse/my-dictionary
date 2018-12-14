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
    'vocabulary',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id'
      },
      word: DataTypes.STRING(255),
      format: DataTypes.STRING(50),
      definition: DataTypes.STRING(1000),
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
      timestamp: true,
      freezeTableName: true
    }
  );

  Vocabulary.associate = function(models) {};

  return Vocabulary;
};
