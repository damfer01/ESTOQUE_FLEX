import { body } from "express-validator";
  
   export const caixaValidation = [
     
   

        body('produto').escape().not().isEmpty().withMessage('produto é obrigatorio'),

        body('quantidade').escape().not().isEmpty().withMessage('quantidade é obrigatorio'),

        body('valor').escape().not().isEmpty().withMessage('valor é obrigatorio'),
        
        body('descricao').escape().not().isEmpty().withMessage('descrição  é obrigatorio'),

];
