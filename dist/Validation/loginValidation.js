"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = void 0;
const express_validator_1 = require("express-validator");
exports.loginValidation = [
    (0, express_validator_1.body)('usuario').escape().not().isEmpty().withMessage('usuario  obrigatorio'),
    (0, express_validator_1.body)('password').escape().not().isEmpty().withMessage('senha  obrigatorio'),
    (0, express_validator_1.body)('password').isLength({
        min: 8, max: 20
    }).withMessage(' no minimo 8 digitos'),
];
//# sourceMappingURL=loginValidation.js.map