const Caixabcrypt = require('bcrypt');

const Produto = require('../Schema/produtoSchema');

module.exports = {

    async create(user_id,   produto , quantidade , codigo , valor , descricao ,data) {
        
        await Produto.create({
        
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
        const users = await Produto.find({usuarioId: user_id});

        return {
            success: true,
            message: ' recovered',
            result: users,

        };
    },

    async show(user_id, id) {
        const user = await Produto.find({_id: id, usuarioId: user_id});

        return {
            success: true,
            message: ' user recovered success',
            result: user,
        };
    },

    async update(user_id, id,produto , quantidade , codigo , valor , descricao,    data) {
        await Produto.findOneAndUpdate({_id: id, usuarioId: user_id}, {
     
            produto, 
            quantidade,
            codigo,
            valor,
            descricao,
        

        });

        return { success: true, message: 'Update feito com succeso' };
    },

    async delete(user_id, id) {
        console.log(id)
        await Produto.findOneAndDelete({_id: id, usuarioId: user_id});

        return {
            success: true,
            message: ' deleted'
        }
    },
};