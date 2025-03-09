import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';


class ImagensReceitas extends Model {}
ImagensReceitas.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    receita_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      references: {
        model: 'receitas',
        key: 'id',
      },
      allowNull: false,
      unique: false
    },
    index_carrousel: { type: DataTypes.TINYINT, allowNull: false },
    url: { type: DataTypes.STRING(255), allowNull: false }
  },
  {
    sequelize,
    modelName: "imagens_receitas"
  }
)


export default ImagensReceitas;