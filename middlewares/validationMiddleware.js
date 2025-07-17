/**
 * Simple validation middleware
 * @param {Object} schema - Joi schema to validate against
 * @param {string} property - Request property to validate (body, query, params)
 * @returns {Function} Express middleware function
 */
const validationMiddleware = (schema, property = 'body') => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property], { abortEarly: false });
    
    if (!error) {
      next();
    } else {
      const errors = error.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message
      }));
      
      res.status(400).send({
        status: 'error',
        message: 'Validation failed',
        errors
      });
    }
  };
};

module.exports = validationMiddleware;