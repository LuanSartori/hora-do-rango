import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';
import EtiquetasReceitas from './etiquetas_receitas.js';
import IngredientesReceitas from './ingredientes_receitas.js'
import Etiquetas from './etiquetas.js';
import Ingredientes from './ingredientes.js';
import ImagensReceitas from './imagens_receitas.js';


class Receitas extends Model {}
Receitas.init(
  {
    id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: { type: DataTypes.STRING(60), allowNull: false },
    conteudo: { type: DataTypes.TEXT, allowNull: false },
    tempo_preparo: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: false },
    calorias_totais: { type: DataTypes.SMALLINT.UNSIGNED, allowNull: true }
  },
  {
    sequelize,
    modelName: "receitas"
  }
)

// RELACIONAMENTOS
Receitas.belongsToMany(Etiquetas, { through: EtiquetasReceitas, as: {singular:'etiqueta', plural: 'etiquetas'} });
Etiquetas.belongsToMany(Receitas, { through: EtiquetasReceitas });

Receitas.belongsToMany(Ingredientes, { through: IngredientesReceitas, as: {singular:'ingrediente', plural: 'ingredientes'} });
Ingredientes.belongsToMany(Receitas, { through: IngredientesReceitas, as: {singular:'receita', plural: 'receitas'}});

Receitas.hasMany(ImagensReceitas, { foreignKey: 'receita_id', as: { singular: 'imagem', plural: 'imagens' } });
ImagensReceitas.belongsTo(Receitas, { foreignKey: 'receita_id', as: 'receita' });


export default Receitas;