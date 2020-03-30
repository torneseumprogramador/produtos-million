const mongoose = require('../../db/conexao');

const Produto = mongoose.model('produto', {
  nome: {type: String, required: true},
  descricao: {type: String, required: true},
  nivel_investidor: {
    type: Number,
    required: true, 
    min: [1, `Investidor deve ter o nível minino de 1 e máximo de 10`], 
    max: [10, `Investidor deve ter o nível minino de 1 e máximo de 10`], 
    validate: {
      validator: Number.isInteger,
      message: `Investidor deve ser inteiro e ter o nível minino de 1 e máximo de 10`
    }
  }
});

module.exports = Produto;