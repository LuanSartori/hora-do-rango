import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';


class Etiquetas extends Model {}
Etiquetas.init(
  {
    id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: { type: DataTypes.STRING(20), allowNull: false }
  },
  {
    sequelize,
    modelName: "etiquetas"
  }
)


export default Etiquetas;