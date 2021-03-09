const { celebrate, Joi, errors} = require('celebrate');

const signUpValidation = celebrate({
  body: Joi.object().keys({
    fullName: Joi.string().min(5).required(),
    email: Joi.string().min(5).email().required(),
    password: Joi.string().min(8).required(),
    birthday: Joi.string().min(8).required(), 
  }),    
});

const updateUserValidation = celebrate({
  body: Joi.object().keys({
    fullName: Joi.string().min(5).required(),
    birthday: Joi.string().min(8).required(),
  }),
});

module.exports =  { signUpValidation, updateUserValidation };
