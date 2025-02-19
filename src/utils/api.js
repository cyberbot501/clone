


const UNSPLASH_ACCESS_KEY = "MEW4HoNc0fom-prFGP8PTfUea710bgxPKcb3taNnwx4"; //Api access key

const fetchImages = async (query, setImages, setLoading) => {
    if (!query.trim()) return; // Prevent empty searches
    if (typeof setImages !== "function") {
      console.error("setImages is not a function");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${UNSPLASH_ACCESS_KEY}`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setImages(data.results || []); // Ensure it never breaks
    } catch (error) {
      console.error("Error fetching images:", error);
      setImages([]); // Show empty state or fallback images
    } finally {
      setLoading(false);
    }
  };
  


export const fetchDefaultImages = async (page, setImages, setLoading, append = false) => { //fetch default images from unsplash api
    if (typeof setImages !== "function") {
      console.error("setImages is not a function");
      return;
    }
  
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos?page=${page}&per_page=30&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      const data = await response.json();
  
      setImages((prevImages) => append ? [...prevImages, ...data] : data);
    } catch (error) {
      console.error("Error fetching default images:", error);
    } finally {
      setLoading(false);
    }
  };
  

export default fetchImages;
