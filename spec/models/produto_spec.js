const Produto = require("../../app/models/produto");
Produto.deleteMany({},(err,removed) => {})

describe("Deve retornar se o modelo de Produto", () => {
  it('foi criado', () => {
    let nome = `teste ${new Date().getTime()}`;
    Produto.create({
      nome: nome, 
      descricao: `É claro que o consenso sobre a necessidade de qualificação possibilita
                  uma melhor visão global das diretrizes de desenvolvimento para o futuro.
                  Modo:OriginalPsicanalíticoProgramador`, 
      nivel_investidor: 1
    }, (err, res) => {
      expect(err == undefined || err == null).toBe(true);
    });
  });

  it('não foi criado, pois o nivel de investidor está fora do limite', () => {
    let nome = `teste ${new Date().getTime()}`;
    Produto.create({
      nome: nome, 
      descricao: `É claro que o consenso sobre a necessidade de qualificação possibilita
                  uma melhor visão global das diretrizes de desenvolvimento para o futuro.
                  Modo:OriginalPsicanalíticoProgramador`, 
      nivel_investidor: 12
    }, (err, res) => {
      expect(err !== undefined && err !== null).toBe(true);
    });
  });

  it('não foi criado, pois o nivel de investidor não é um inteiro', () => {
    let nome = `teste ${new Date().getTime()}`;
    Produto.create({
      nome: nome, 
      descricao: `É claro que o consenso sobre a necessidade de qualificação possibilita
                  uma melhor visão global das diretrizes de desenvolvimento para o futuro.
                  Modo:OriginalPsicanalíticoProgramador`, 
      nivel_investidor: 5.6
    }, (err, res) => {
      expect(err !== undefined && err !== null).toBe(true);
    });
  });


  it('Deve retornar o modelo de produtos',()=>{
    Produto.find().then(dado=>{
      expect(dado!=undefined).toBe(true);
    })

  });
});