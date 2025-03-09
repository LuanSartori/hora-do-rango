import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';


class Cargos extends Model {}
Cargos.init(
  {
    id: {
      type: DataTypes.TINYINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: { type: DataTypes.STRING(30), allowNull: false }
  },
  {
    sequelize,
    modelName: "cargos"
  }
)


export default Cargos;