import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';
import Cargos from './cargos.js';


class Usuarios extends Model {}
Usuarios.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: { type: DataTypes.STRING(50), allowNull: false },
    login: { type: DataTypes.STRING(40), allowNull: false },
    senha: { type: DataTypes.STRING(80), allowNull: false },
    status: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true }
  },
  {
    sequelize,
    modelName: "usuarios"
  }
);

// RELACIONAMENTOS
Usuarios.belongsTo(Cargos, { foreignKey: 'cargo_id', as: 'cargo' });
Cargos.hasOne(Usuarios, { foreignKey: 'cargo_id'});


export default Usuarios;