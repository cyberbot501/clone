import React from "react";
import Image from "next/image";

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-4">
      <div className="bg-white p-4 rounded-lg shadow-lg h-[] max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-black text-white px-3 py-1 rounded"
        >
          Close
        </button>
        <Image
          src={image.urls.regular}
          alt={image.alt_description}
          width={500}
          height={100}
          className="rounded-md md:h-[450px] w-full"
        />
        <div className="mt-2 text-center">
          <h2 className="text-[16px] font-semibold text-black">{image.description || "Untitled"}</h2>
          <p className="text-gray-600">By {image.user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
