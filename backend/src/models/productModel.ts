import { model, Schema } from 'mongoose';
import { ERROR_MESSAGES } from '../constants';

interface IProduct {
  title: string;
  image: {
    fileName: string;
    originalName: string;
  };
  category: string;
  description?: string;
  price?: number | null;
}

const productSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: [true, ERROR_MESSAGES.PRODUCT_TITLE_REQUIRED],
      minlength: [2, ERROR_MESSAGES.PRODUCT_TITLE_MIN_LENGTH],
      maxlength: [30, ERROR_MESSAGES.PRODUCT_TITLE_MAX_LENGTH],
      unique: true,
    },
    image: {
      fileName: {
        type: String,
        required: [true, ERROR_MESSAGES.PRODUCT_IMAGE_FILE_NAME_REQUIRED],
      },
      originalName: {
        type: String,
        required: [true, ERROR_MESSAGES.PRODUCT_IMAGE_ORIGINAL_NAME_REQUIRED],
      },
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      min: [0, ERROR_MESSAGES.PRODUCT_PRICE_NEGATIVE],
      default: null,
    },
  },
);

export default model('product', productSchema);
