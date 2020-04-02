const express = require('express');
const router = express.Router();
const HomeController = require("../app/controllers/home_controller");
const ProdutoController = require("../app/controllers/produtos_controller");

router.get("/", HomeController.index);
router.get("/produtos.json",ProdutoController.index);
router.post("/produtos.json", ProdutoController.create);
router.put('/produtos/:produto_id.json', ProdutoController.change);
router.delete('/produtos/:produto_id.json', ProdutoController.remover);
		
module.exports = router;
