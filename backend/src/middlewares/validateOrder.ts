import Joi from 'joi';
import { celebrate } from 'celebrate';
import { ERROR_MESSAGES } from '../constants';

const orderValidationSchema = {
  body: Joi.object({
    payment: Joi.string()
      .valid('card', 'online')
      .required()
      .messages({ 'any.only': ERROR_MESSAGES.INVALID_PAYMENT_TYPE }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({ 'string.email': ERROR_MESSAGES.INVALID_EMAIL_FORMAT }),
    phone: Joi.string()
      .required()
      .pattern(/^\+?\d{10,15}$/)
      .messages({ 'string.pattern.base': ERROR_MESSAGES.INVALID_PHONE_FORMAT }),
    address: Joi.string()
      .required()
      .messages({ 'any.required': ERROR_MESSAGES.ORDER_EMPTY_ADDRESS }),
    total: Joi.number()
      .min(0)
      .required()
      .messages({ 'number.min': ERROR_MESSAGES.ORDER_NEGATIVE_TOTAL }),
    items: Joi.array()
      .items(Joi.string()
        .length(24)
        .hex())
      .min(1)
      .required()
      .messages({
        'array.min': ERROR_MESSAGES.ORDER_EMPTY_ITEMS,
        'string.length': ERROR_MESSAGES.ORDER_INVALID_ITEM_ID,
      }),
  }),
};

const validateOrder = celebrate(orderValidationSchema);

export default validateOrder;
