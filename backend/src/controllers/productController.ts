import { NextFunction, Request, Response } from 'express';
import Product from '../models/productModel';
import { ERROR_MESSAGES, HTTP_STATUS } from '../constants';
import ConflictError from '../errors/conflictError';
import BadRequestError from '../errors/badRequestError';

const getAllProducts = (_req: Request, res: Response, next: NextFunction) => {
  Product.find()
    .then((products) => {
      res.status(HTTP_STATUS.OK)
        .json({
          items: products,
          total: products.length,
        });
    })
    .catch((error) => {
      next(error);
    });
};

const createProduct = (req: Request, res: Response, next: NextFunction) => {
  const {
    description,
    image,
    title,
    category,
    price,
  } = req.body;

  Product.create({
    description,
    image,
    title,
    category,
    price,
  })
    .then((product) => {
      res.status(HTTP_STATUS.CREATED)
        .json({ item: product });
    })
    .catch((error) => {
      if (error instanceof Error && error.message.includes('E11000')) {
        return next(new ConflictError(ERROR_MESSAGES.PRODUCT_DUPLICATE_TITLE));
      }

      if (error.name === 'ValidationError') {
        return next(new BadRequestError(ERROR_MESSAGES.VALIDATION_ERROR));
      }

      return next(error);
    });
};

export { getAllProducts, createProduct };
