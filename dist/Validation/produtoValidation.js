"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtoValidation = void 0;
const express_validator_1 = require("express-validator");
exports.produtoValidation = [
    (0, express_validator_1.body)('produto').escape().not().isEmpty().withMessage('produto é obrigatorio'),
    (0, express_validator_1.body)('quantidade').escape().not().isEmpty().withMessage('quantidade é obrigatorio'),
    (0, express_validator_1.body)('descricao').escape().not().isEmpty().withMessage('descrição  é obrigatorio'),
];
//# sourceMappingURL=produtoValidation.js.map