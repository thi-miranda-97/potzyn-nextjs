"use client";

import { useState } from "react";
import Image from "next/image";

interface ImagesProps {
  images: string[];
}

const Images = ({ images }: ImagesProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
      {/* <Image
        src={selectedImage}
        alt="Selected product image"
        width={500}
        height={500}
        className="w-full rounded-lg"
      /> */}

      <div className="flex gap-2 my-3 lg:my-6">
        {images.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer ${
              selectedImage === image ? "" : "filter grayscale-[80%]"
            }`}
            onClick={() => setSelectedImage(image)} // Update selected image
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={500}
              height={500}
              className="rounded-md w-full h-full"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Images;
