import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';
import Usuarios from './usuarios.js';
import Receitas from './receitas.js';
import CurtidasComentarios from './curtidas_comentarios.js';


class Comentarios extends Model {}
Comentarios.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    usuario_id: {
        type: DataTypes.UUID,
        references: {
            model: 'usuarios',
            key: 'id',
        },
        allowNull: false,
        unique: false
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
    conteudo: { type: DataTypes.TEXT, allowNull: false },
    nota: { type: DataTypes.TINYINT, allowNull: true },
    pai_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
          model: 'comentarios',
          key: 'id',
      },
      allowNull: true
  },
  },
  {
    sequelize,
    modelName: "comentarios",
    timestamps: true,
    createdAt: "criado_em",
    updatedAt: "atualizado_em"
  }
)

// RELACIONAMENTOS
Comentarios.belongsTo(Comentarios, { foreignKey: 'pai_id', as: 'pai' });
Comentarios.hasMany(Comentarios, { foreignKey: 'pai_id', as: {singular: 'filho', plural: 'filhos'} });

// comentarios nas receitas
Usuarios.belongsToMany(Receitas, { foreignKey: 'usuario_id', through: { model: Comentarios, unique: false }, as: {singular: 'receitaComentada', plural: 'receitasComentadas'} });
Usuarios.hasMany(Comentarios, { foreignKey: 'usuario_id', as: {singular: 'meuComentario', plural: 'meusComentarios'} });
Comentarios.belongsTo(Usuarios, { foreignKey: 'usuario_id', as: 'usuario' });

Receitas.belongsToMany(Usuarios, { foreignKey: 'receita_id', through: { model: Comentarios, unique: false },  as: {singular: 'usuarioQueComentou', plural: 'usuariosQueComentaram'} });
Receitas.hasMany(Comentarios, { foreignKey: 'receita_id', as: {singular: 'meuComentario', plural: 'meusComentarios'} });
Comentarios.belongsTo(Receitas, { foreignKey: 'receita_id', as: 'receita' });

// curtidas nos comentários
Usuarios.belongsToMany(Comentarios, { through: CurtidasComentarios, as: {singular: 'curtidaComentario', plural: 'curtidasComentarios'} });
Comentarios.belongsToMany(Usuarios, { through: CurtidasComentarios, as: {singular: 'curtida', plural: 'curtidas'} });



export default Comentarios;