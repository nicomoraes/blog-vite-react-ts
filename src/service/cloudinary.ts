import { Cloudinary } from '@cloudinary/url-gen';

export const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    apiKey: import.meta.env.VITE_CLOUDINARY_CLOUD_APIKEY,
    apiSecret: import.meta.env.VITE_CLOUDINARY_CLOUD_APISECRET,
  },
});
