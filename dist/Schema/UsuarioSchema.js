"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Cadastro = new mongoose_1.Schema({
    usuario: { type: String, required: true },
    password: { type: String, required: true },
});
module.exports = (0, mongoose_1.model)('user', Cadastro);
//# sourceMappingURL=UsuarioSchema.js.map