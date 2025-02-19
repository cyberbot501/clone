const UNSPLASH_ACCESS_KEY = "MEW4HoNc0fom-prFGP8PTfUea710bgxPKcb3taNnwx4"; 
const fetchImages = async (query, setImages, setLoading) => {
  setLoading(true);
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    const data = await response.json();
    setImages(data.results || []);
  } catch (error) {
    console.error("Error fetching images:", error);
  } finally {
    setLoading(false);
  }
};

export const fetchDefaultImages = async (setImages, setLoading) => {
  setLoading(true);
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?per_page=12&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    const data = await response.json();
    setImages(data || []);
  } catch (error) {
    console.error("Error fetching default images:", error);
  } finally {
    setLoading(false);
  }
};

export default fetchImages;
