import {
  body
} from "express-validator";


export const loginValidation = [
  



  body('usuario').escape().not().isEmpty().withMessage('usuario  obrigatorio'),

  body('password').escape().not().isEmpty().withMessage('senha  obrigatorio'),

  body('password').isLength({
    min: 8, max: 20
  }).withMessage(' no minimo 8 digitos'),

];

