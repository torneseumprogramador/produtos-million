const Produto = require('../models/produto');
const TOKEN = "e5bb38b104fc12c115af9f7d702e9bce380eccf2"

const ProdutoController = {
  index: async (req,res,next)=>{

    if(req.headers.token==TOKEN){
      const prod = await Produto.find({});
      return res.status(200).send(prod);

    }else{
      res.status(401).send({error:'Acesso negado API produtos-Token header inválido'});
    }

  },
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
  },
  change: async(req, res, next) => {
    if(req.headers.token == TOKEN)
    {
      try
      {
          await Produto.findOneAndUpdate({_id: req.params.produto_id}, { nome: req.body.nome, descricao: req.body.descricao,  nivel_investidor: req.body.nivel_investidor })
          res.status(204).send(`Alterado com o id ${req.params.produto_id}`)
      }
      catch(err)
      {
        res.status(401).send(`Erro: ${err}`)
      }
    }
    else
    {
      res.status(401).send(`Acesso negado, token inválido`)
    }
  },
  remover: async(req, res, next) => {
    if(req.headers.token == TOKEN)
    {
      try 
      {
        await Produto.findOneAndDelete({_id: req.params.produto_id})
        res.status(200).send(`Deletando um id ${req.params.produto_id}`)
      } 
      catch (err) 
      {
        res.status(401).send(`Erro: ${err}`)
      }
    }
    else
    {
      res.status(401).send(`Acesso negado, token inválido`)
    }
  }
}

module.exports = ProdutoController;