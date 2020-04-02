# API Produtos million

## Dependências

Para instalar todas as dependências do projeto executar o comando "npm install"

## Padrão de rotas
<pre>
	const ProdutoController = require("../app/controllers/produtos_controller");
	
	Rota GET ("/produtos.json", ProdutoController.index);
	Rota POST ("/produtos.json", ProdutoController.create);
	Rota UPDATE ("/produtos/:id.json", ProdutoController.change);
	Rota DELETE ("/produtos/:id.json", ProdutoController.delete);
</pre>

## Estrutura de dados
<pre>
	produto = {
		nome: "String",
		descricao: "String",
		nivel_investidor: Inteiro(deve ser limitado de 1 à 10)
	}
</pre>

## Testes

Para realizar a bateria de testes para executar o comando "npm test"

## Instruções de uso

### Lista de Produtos
Request com o método **GET** para **/produtos.json** lista os produtos cadastrados.
Dentro do **header**, enviar a propriedade **token** com o seu **token** de acesso.

Exemplo de  request:

```sh
var request = require('request');

var options = {
	'method': GET,
	'url': 'https://localhost:3000/produtos.json',
	'headers': {
		'token': 'SEU_TOKEN_DE_ACESSO'
	}
};

request(options, function (error, response) {
	if (error) throw new Error(error);
	console.log(response.status);
});
```


### Cadastro de produtos

Request com o método **POST** para **/produtos.json** cadastra novos produtos.
Enviar paramêtros **nome, descricao e nivel_investidor** via **application/x-www-form-urlencoded** e dentro do **header**, enviar a propriedade **token** com o seu **token de acesso**.

Exemplo de request:

```sh
var request = require('request');

var options = {
	'method': POST,
	'url': 'https://localhost:3000/produtos.json',
	
	'headers': {
		'content-type': 'application/x-www-form-urlencoded',
		'token': 'SEU_TOKEN_DE_ACESSO'
	},
	
	body: JSON.stringify(
		{
			“nome”: “nome_produto”,
			“descricao”: “descricao_produto”,
			"nivel_investidor": nivel_investidor
		}

	);

};

request(options, function (error, response) {
	if (error) throw new Error(error);
	console.log(response.status);
});
```

As propriedades **nome** e **nivel_investidor** são obrigatórias.
Lembrando também que a propriedade **nivel_investidor** deve conter um valor inteiro entre 1 e 10.

### Atualização de produto

Para alterar os dados de um produto  basta enviar um request com o método **PUT** para **/produtos/:id.json** passando como parâmetro o **_id** do produto na **query** do request.
Os parâmetros (nome, descricao ou nivel_investidor) que serão atualizados devem ser enviados via **body** no formato **application/x-www-form-urlencoded** e dentro do **header**, enviar a propriedade **token** com o seu **token de acesso**.

Exemplo de request:

```sh
var request = require('request');

var options = {
	'method': PUT,
	'url': 'https://localhost:3000/produtos/:id.json',
	
	'headers': {
		'content-type': 'application/x-www-form-urlencoded',
		'token': 'SEU_TOKEN_DE_ACESSO'
	},
	
	body: JSON.stringify(
		{
			“descricao”: “descricao_produto”,
			"nivel_investidor": nivel_investidor
		}
	);
};

request(options, function (error, response) {
	if (error) throw new Error(error);
	console.log(response.status);
});
```

Lembrando que a propriedade **nivel_investidor** deve conter um valor inteiro entre 1 e 10.

### Remoção de um produto

Para alterar os dados de um produto  basta enviar um request com o método **DELETE** para **/produtos/:id.json** passando como parâmetro o **_id** do produto na **query** do request.
No **header**, enviar a propriedade **token** com o seu **token de acesso**.

Exemplo de request:

```sh
var request = require('request');

var options = {
	'method': PUT,
	'url': 'https://localhost:3000/produtos/:id.json',
	
	'headers': {
		'token': 'SEU_TOKEN_DE_ACESSO'
	}
};

request(options, function (error, response) {
	if (error) throw new Error(error);
	console.log(response.status);
});
```