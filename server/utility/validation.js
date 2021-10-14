const Joi = require("@hapi/joi");

const signupValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports.signupValidation = signupValidation;
