import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';


class Ingredientes extends Model {}
Ingredientes.init(
  {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: { type: DataTypes.STRING(20), allowNull: false },
    caloria: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: true }
  },
  {
    sequelize,
    modelName: "ingredientes"
  }
)


export default Ingredientes;