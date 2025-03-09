import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';


class CurtidasComentarios extends Model {}
CurtidasComentarios.init(
  {
    usuario_id: {
        type: DataTypes.UUID,
        references: {
            model: 'usuarios',
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
    modelName: "curtidas_comentarios"
  }
)


export default CurtidasComentarios;