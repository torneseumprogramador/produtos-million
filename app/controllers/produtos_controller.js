const Produto = require('../models/produto');
const TOKEN = "e5bb38b104fc12c115af9f7d702e9bce380eccf2"

const ProdutoController = {
  create: async(req, res, next) => {
    if(req.headers.token == TOKEN){
      try {
        await Produto.create({
          nome: req.body.nome, 
          descricao: req.body.descricao, 
          nivel_investidor: req.body.nivel_investidor
        });
        res.status(204).send({});
      }
      catch(err) {
        res.status(401).send(`Erro: ${err}`)
      }
    }
    else {
      res.status(401).send(`Acesso negado, token inválido`)
    }
  }
}

module.exports = ProdutoController;