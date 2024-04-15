import { Schema , model } from "mongoose";

const cadastroCaixa = new Schema({
   
    
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
  
    produto: {type: String,   required: true, },
    
    quantidade: {  type: String, required: false      },
    
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
    
    descricao: {  type: String,  required: false  },
    
    
    data:{
        type: Date,
        default: new Date(),
    },
});

module.exports= model('cadastroCaixa',cadastroCaixa) ; 