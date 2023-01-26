import React from 'react';

import { cld } from '@service/cloudinary';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage, responsive, placeholder, lazyload } from '@cloudinary/react';

const imageSizes = {
  article: { width: 800, height: 300 },
  post: { width: 1024, height: 200 },
  slide: { width: 1024, height: 310 },
  card: { width: 250, height: 194 },
};

type Props = {
  link: string;
  size: keyof typeof imageSizes;
};
export const CloudinaryImage: React.FC<Props> = ({ link, size }) => {
  const myImage = cld.image(link.substring(link.indexOf('blog')));

  myImage.resize(
    fill().width(imageSizes[size].width).height(imageSizes[size].height).gravity(autoGravity()),
  );

  return (
    <AdvancedImage
      cldImg={myImage}
      plugins={[
        responsive({ steps: [240, 640, 768, 1024] }),
        lazyload(),
        placeholder({ mode: 'predominant-color' }),
      ]}
    />
  );
};
