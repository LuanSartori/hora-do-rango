import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';


class IngredientesReceitas extends Model {}
IngredientesReceitas.init(
  {
    ingrediente_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        references: {
            model: 'ingredientes',
            key: 'id',
        }
    },
    receita_id: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        references: {
            model: 'receitas',
            key: 'id',
        }
    },
    quantidade: { type: DataTypes.STRING(30), allowNull: true }
  },
  {
    sequelize,
    modelName: "ingredientes_receitas"
  }
)


export default IngredientesReceitas;