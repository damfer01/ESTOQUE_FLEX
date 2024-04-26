const { Router  } = require('express')
const routerr = Router();
const routerProoduto = require("../Controllers/produtoController")

const {authenticate} = require("../config/auth")

     //Validar o login
import {storeProduto } from "../Validation/indexProduto";

   //validar o produto
import { produtoValidation } from "../Validation/produtoValidation";

console.log(' Caixa em rotas!!!')

routerr.post('/',authenticate,produtoValidation,storeProduto, routerProoduto.create);
routerr.get('/', authenticate, routerProoduto.index);
routerr.get('/:id', authenticate, routerProoduto.show);
routerr.put('/:id', authenticate, routerProoduto.update);
routerr.delete('/:id', authenticate, routerProoduto.delete)

module.exports = routerr;

export {};