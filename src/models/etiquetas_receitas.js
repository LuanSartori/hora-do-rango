import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';


class EtiquetasReceitas extends Model {}
EtiquetasReceitas.init(
  {
    etiqueta_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        references: {
            model: 'etiquetas',
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
  },
  {
    sequelize,
    modelName: "etiquetas_receitas"
  }
)


export default EtiquetasReceitas;