const Caixabcrypt = require('bcrypt');

const Caixa = require('../Schema/CaixaSchema');

module.exports = {

    async create(user_id,   produto , quantidade , codigo , valor , descricao ,data) {
        
        await Caixa.create({
        
            usuarioId: user_id,
            produto, 
            quantidade,
            codigo,
            valor,
            descricao,
            data,

        });

        return { success: true, message: 'sucesso' };
    },

    async index(user_id: string) {
        const users = await Caixa.find({usuarioId: user_id});

        return {
            success: true,
            message: ' recovered',
            result: users,

        };
    },

    async show(user_id, id) {
        const user = await Caixa.find({_id: id, usuarioId: user_id});

        return {
            success: true,
            message: ' user recovered success',
            result: user,
        };
    },

    async update(user_id, id,produto , quantidade , codigo , valor , descricao,    data) {
        await Caixa.findOneAndUpdate({_id: id, usuarioId: user_id}, {
     
            produto, 
            quantidade,
            codigo,
            valor,
            descricao,
            data,

        });

        return { success: true, message: 'sucesso' };
    },

    async delete(user_id, id) {
        console.log(id)
        await Caixa.findOneAndDelete({_id: id, usuarioId: user_id});

        return {
            success: true,
            message: ' deleted'
        }
    },
};