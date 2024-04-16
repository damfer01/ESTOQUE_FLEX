"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const routerr = Router();
const routerProoduto = require("../Controllers/produtoController");
const { authenticate } = require("../config/auth");
//Validar o login
const indexProduto_1 = require("../Validation/indexProduto");
//validar o produto
const produtoValidation_1 = require("../Validation/produtoValidation");
console.log(' Caixa em rotas!!!');
routerr.post('/', authenticate, produtoValidation_1.produtoValidation, indexProduto_1.storeProduto, routerProoduto.create);
routerr.get('/', authenticate, routerProoduto.index);
routerr.get('/:id', authenticate, routerProoduto.show);
routerr.put('/:id', authenticate, routerProoduto.update);
routerr.delete('/:id', authenticate, routerProoduto.delete);
module.exports = routerr;
//# sourceMappingURL=produtoRouter.js.map