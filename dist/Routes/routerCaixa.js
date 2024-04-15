"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const routerr = Router();
const routerCaixa = require("../Controllers/caixaController");
//validar a caixa
// import { caixaValidation } from "../Validation/caixaValidation";
console.log(' Caixa em rotas!!!');
routerr.post('/', routerCaixa.create);
routerr.get('/', routerCaixa.index);
routerr.get('/:id', routerCaixa.show);
routerr.put('/:id', routerCaixa.update);
routerr.delete('/:id', routerCaixa.delete);
module.exports = routerr;
//# sourceMappingURL=routerCaixa.js.map