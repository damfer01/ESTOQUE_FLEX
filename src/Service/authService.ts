const bcrypt = require('bcrypt');

const User = require('../Schema/UsuarioSchema');
const { generateToken } = require('../config/auth');

module.exports = {
  async create(usuario, password) {
    const user = await User.findOne({ usuario }).select('+password');

    if(!user) return { success: false, message: 'invalid credentials'};

    const checkPass = await bcrypt.compare( password, user.password );

    if( !checkPass ) return { success: false, message: 'invalid credentials'};

    const token = await generateToken( user._id );

    return {
      success: true,
      message: 'login efetivado com sucesso',
      result: {
        usuario: user.usuario,
        token,
      },
    };
  },
};
export{}
