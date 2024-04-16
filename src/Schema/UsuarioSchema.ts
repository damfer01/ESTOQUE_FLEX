import { Schema , model } from "mongoose";


const  Cadastro = new Schema({

   usuario :{type: String  , required: true},

   password:{ type: String  , required: true},
   
});

module.exports =  model('user', Cadastro)
