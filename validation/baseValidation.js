const Joi = require("joi");
const fcmTokenSchema = require("./fcmToken");

const baseUserValidation = {
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$"))
    .required()
    .messages({
      "string.pattern.base":
        "Password must be at least 6 characters long and include uppercase, lowercase, number, and special character.",
      "string.empty": "Password is required.",
    }),
  phone: Joi.string()
    .pattern(/^[+]?[0-9]{10,15}$/)
    .required()
    .messages({
      "string.pattern.base": "Phone number must be 10 to 15 digits, optionally starting with +.",
    }),
  role: Joi.string().valid("passenger", "rider", "admin"),
  fcmToken: fcmTokenSchema,
};

module.exports = baseUserValidation;
