import { body } from "express-validator";
  
   export const produtoValidation = [
     
   

        body('produto').escape().not().isEmpty().withMessage('produto é obrigatorio'),

        body('quantidade').escape().not().isEmpty().withMessage('quantidade é obrigatorio'),



        
        body('descricao').escape().not().isEmpty().withMessage('descrição  é obrigatorio'),

];
