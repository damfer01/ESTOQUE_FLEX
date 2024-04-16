"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const produtoSchema = new mongoose_1.Schema({
    usuarioId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    },
    produto: { type: String, required: true, },
    quantidade: { type: String, required: false },
    codigo: [
        {
            referencia: { type: String, }
        }
    ],
    valor: [
        {
            compra: { type: Number, required: false },
            venda: { type: Number, required: false },
        }
    ],
    descricao: { type: String, required: false },
    data: {
        type: Date,
        default: new Date(),
    },
});
module.exports = (0, mongoose_1.model)('produto', produtoSchema);
//# sourceMappingURL=produtoSchema.js.map