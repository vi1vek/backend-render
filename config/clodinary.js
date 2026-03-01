import pkg from 'cloudinary';
const { v2: cloudinary } = pkg;
import { CloudinaryStorage} from 'multer-storage-cloudinary'
import dotenv from 'dotenv'
dotenv.config()

const cloudinaryConfig = { 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API, 
  api_secret: process.env.CLOUDINARY_SECRET
};


cloudinary.config(cloudinaryConfig)

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params:{
    folder: 'render_mern_uploads',
    allowed_formats: ['jpg','png','jpeg'],
  },
});

export {cloudinary,storage}