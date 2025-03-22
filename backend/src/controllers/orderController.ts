import { NextFunction, Request, Response } from 'express';
import { faker } from '@faker-js/faker';
import { ERROR_MESSAGES, HTTP_STATUS } from '../constants';
import Product from '../models/productModel';
import BadRequestError from '../errors/badRequestError';

const createOrder = (req: Request, res: Response, next: NextFunction) => {
  const {
    total,
    items,
  } = req.body;

  Product.find({ _id: { $in: items } })
    .then((products) => {
      if (products.length !== items.length) {
        return next(new BadRequestError(ERROR_MESSAGES.ORDER_INVALID_ITEM_ID));
      }

      const unavailableProducts = products.filter((product) => product.price === null);

      if (unavailableProducts.length > 0) {
        return next(new BadRequestError(ERROR_MESSAGES.ORDER_ITEM_UNAVAILABLE));
      }

      const calculatedTotal = products.reduce((sum, product) => sum + (product.price || 0), 0);

      if (calculatedTotal !== total) {
        return next(new BadRequestError(ERROR_MESSAGES.ORDER_TOTAL_MISMATCH));
      }

      const orderId = faker.string.uuid();

      return res.status(HTTP_STATUS.OK)
        .json({
          id: orderId,
          total,
        });
    })
    .catch((error) => {
      next(error);
    });
};

export default createOrder;
