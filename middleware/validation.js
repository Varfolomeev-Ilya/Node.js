const { celebrate, Joi, errors } = require('celebrate');

exports.validationInformation = async (req, res) => {
  const customValidator = Celebrate({
    body: Joi.object().keys({
      fullName: Joi.string().min(5).required(),
      email: Joi.string().min(5).email().required(),
      password: Joi.string().min(8).required(),
      birthday: Joi.string().min(8).required(), 
    }),    
  });
};