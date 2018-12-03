export interface User {
  id: number,
  name: string,
  password: string,
  country: string,
  email: string,
  createdAt: Date,
  updatedAt: Date
}

export default (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      country: DataTypes.STRING,
      email: DataTypes.STRING,
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

  Users.associate = function(models) {};

  return Users;
};
