const Joi = require('joi');

exports.validateDomain = (req, res, next) => {
  const schema = Joi.object({
    domain: Joi.string().uri().required().messages({
      'string.uri': 'Invalid domain URL.',
      'string.empty': 'Domain URL is required.',
    }),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};
