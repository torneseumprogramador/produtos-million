const Produto = require("../../app/models/produto");
const host = "http://localhost:3000";
const axios = require('axios').default;

describe("ProdutoController", () => {

  beforeEach(async() => {
    await Produto.deleteMany({}, async(err,removed) => {
      
      await Produto.create({
        nome: `Ações`,
        descricao:`Parcelas que compõem o capital social de uma empresa. `,
        nivel_investidor: 3})
      
      await Produto.create({
        nome: `Tesouro Direto`,
        descricao:`Programa do Tesouro Nacional do Brasil com o intuito de democratizar a compra e venda de títulos públicos federais por pessoas físicas através da internet.`,
        nivel_investidor: 8})
    })
  })




  describe("POST /produtos.json - Deve retornar se o controller de Produto (ProdutoController)", () => {
    
    it('cadastrou um produto', async(done) => {
      const body = {
        nome: `Produto ${new Date().getTime()}`,
        descricao:`É claro que o consenso sobre a necessidade de qualificação garante 
                   a contribuição de um grupo importante na determinação dos métodos 
                   utilizados na avaliação de resultados.`,
        nivel_investidor: 7
      }
      const config = {
        headers:{'token': 'e5bb38b104fc12c115af9f7d702e9bce380eccf2'}
      }
      const response = await axios.post(`${host}/produtos.json`, body, config)
      expect(response.status).toBe(204);
      done();
    });
  });




  describe("GET/produtos.json - Deve retornar uma lista de Produtos ",() =>{
    
    it('Deve retornar o statuscode 200', async(done)=>{
      const config={
        headers:{'token': 'e5bb38b104fc12c115af9f7d702e9bce380eccf2'}
      }
      const response = await axios.get(`${host}/produtos.json`, config)
      expect(response.status).toBe(200);
      done();
    });

    it('Deve retornar o nome dos produtos cadastrados no beforeEach',async(done)=>{
    const config={
      headers:{'token': 'e5bb38b104fc12c115af9f7d702e9bce380eccf2'}
    }
    const response = await axios.get(`${host}/produtos.json`,config)
    const itens = response.data;
    expect(itens[0].nome).toBe("Ações");
    expect(itens[1].nome).toBe("Tesouro Direto");
    done();

    });
  });

 describe("PUT /produtos.json - Produto", () => {
    it("deve alterar um produto", async(done) => {
      const config={
        headers:{'token': 'e5bb38b104fc12c115af9f7d702e9bce380eccf2'}
      }    

      let nome = `Produto ${new Date().getTime()}`;
      
      const produto = await Produto.create({
        nome: nome,
        descricao:`Parcelas que compõem o capital social de uma empresa. `,
        nivel_investidor: 3
      } )
      console.log(produto._id);

      const body = { 
         nome,
         descricao: nome + `Parcelas que compõem o capital social de uma empresa. `,
         nivel_investidor: 9 
      }
        const response = await axios.put(`${host}/produto/${produto._id}.json`, body, config)
        expect(response.status).toBe(204);
        done();
      });
    });



});