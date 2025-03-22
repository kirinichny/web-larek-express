const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  CONFLICT: 409,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const ERROR_MESSAGES = {
  INTERNAL_SERVER_ERROR: 'Внутренняя ошибка сервера',
  VALIDATION_ERROR: 'Ошибка валидации данных',
  INVALID_PAYMENT_TYPE: 'Неверный тип оплаты',
  INVALID_EMAIL_FORMAT: 'Неверный формат email',
  INVALID_PHONE_FORMAT: 'Неверный формат телефона',

  PRODUCT_DUPLICATE_TITLE: 'Товар с таким названием уже существует',
  PRODUCT_TITLE_REQUIRED: 'Наименование товара обязательно',
  PRODUCT_TITLE_MIN_LENGTH: 'Наименование товара должно содержать минимум 2 символа',
  PRODUCT_TITLE_MAX_LENGTH: 'Наименование товара не может превышать 30 символов',
  PRODUCT_IMAGE_FILE_NAME_REQUIRED: 'Путь до файла с изображением товара обязателен',
  PRODUCT_IMAGE_ORIGINAL_NAME_REQUIRED: 'Имя файла с изображением товара обязательно',
  PRODUCT_CATEGORY_REQUIRED: 'Категория товара обязательна',
  PRODUCT_PRICE_NEGATIVE: 'Цена не может быть отрицательной',

  ORDER_EMPTY_ADDRESS: 'Адрес доставки обязателен',
  ORDER_NEGATIVE_TOTAL: 'Общая сумма заказа должна быть положительной',
  ORDER_EMPTY_ITEMS: 'Массив товаров не может быть пустым',
  ORDER_INVALID_ITEM_ID: 'Один или несколько товаров не найдены',
  ORDER_ITEM_UNAVAILABLE: 'Один или несколько товаров недоступны для покупки',
  ORDER_TOTAL_MISMATCH: 'Общая сумма заказа не совпадает с суммой товаров',
};

export { HTTP_STATUS, ERROR_MESSAGES };
