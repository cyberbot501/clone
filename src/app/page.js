"use client";


import { useState, useEffect } from "react";
import Image from "next/image";
import fetchImages, { fetchDefaultImages } from "../utils/api";
import ImageModal from "../components/ImageModal";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchDefaultImages(setImages, setLoading);
  }, []);

  return (
    <div className="min-h-screen  bg-gray-100 text-center">

     <div className="flex flex-row justify-between px-4 md:px-10 fixed h-[100px] w-[100%] bg-white items-center drop-shadow-2xl"> 
     <h1 className="text-sm md:text-3xl font-bold text-black mb-4">Xanotech Task</h1>
      <div className="mb-4 flex flex-row  justify-center">
        <input
          type="text"
          placeholder="Search images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchImages(query, setImages, setLoading)}
          className="p-2 border rounded-md md:w-64 h-[40px] outline-none w-40 text-gray-600 "
        />
        {/* Search button for larger screens */}
        <button
          onClick={() => fetchImages(query, setImages, setLoading)}
          className="ml-2 px-4 py-2 h-[40px] bg-black text-white rounded-md hidden md:block"  
        >
          Search
        </button>

            {/* Search icon button for smaller screens */}
        <button
          onClick={() => fetchImages(query, setImages, setLoading)}
          className="ml-2 px-4 py-2 h-[40px] w-11 bg-black text-white rounded-md md:hidden"
        >
          <FaSearch />
        </button>


      </div>
     </div>


      {loading && <p>Loading...</p>}
       {/* Masonry grid layout to display images */}
         <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                gutterBreakpoints={{350: "12px", 750: "16px", 900: "24px"}}
                className="pt-28"
            >
                <Masonry>
        {images.map((img) => (  
          <Image
            key={img.id}
            src={img.urls.small}
            alt={img.alt_description} 
            width={1300}
            height={1200}
            className="rounded-md cursor-pointer"
            onClick={() => setSelectedImage(img)}
          />
        ))}
          </Masonry>
          </ResponsiveMasonry>

           {/* Image Modal: Display selected image */}
      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
}
