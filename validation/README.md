# Validation Middleware

This directory contains validation schemas and middleware for validating request data.

## How to Use the Validator Middleware

The validator middleware is a factory function that creates middleware functions for validating request data against Joi schemas.

### Basic Usage

```javascript
const validator = require('../validation/validator');
const { someSchema } = require('../validation/someValidation');

// In your route file
router.post('/endpoint', validator(someSchema), controller.handler);
```

### Parameters

- `schema`: A Joi schema to validate against
- `source` (optional): The request property to validate (default: 'body')

### Example with Different Source

```javascript
// Validate query parameters
router.get('/search', validator(searchSchema, 'query'), controller.search);

// Validate URL parameters
router.get('/:id', validator(idSchema, 'params'), controller.getById);
```

### Error Handling

When validation fails, the middleware will respond with a 400 Bad Request status and a JSON object containing:

```json
{
  "status": "error",
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "\"email\" must be a valid email"
    },
    {
      "field": "password",
      "message": "\"password\" length must be at least 6 characters long"
    }
  ]
}
```

## Creating Validation Schemas

Create Joi validation schemas in separate files based on the entity they validate:

```javascript
const Joi = require('joi');

const userValidation = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

module.exports = { userValidation };
```