import dotenv from 'dotenv';

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || 3000,
  DB_ADDRESS: process.env.DB_ADDRESS || 'mongodb://127.0.0.1:27017/weblarek',
};

export default CONFIG;
