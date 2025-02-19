const UNSPLASH_ACCESS_KEY = "fH37E1dHuANPCm3SKnzCjjZ_pDNC-YBVbiuFVlDAlBs"; // Unsplash API access key



// Function to fetch images based on the search query
const fetchImages = async (query, setImages, setLoading) => {
  setLoading(true);
  try {
    const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=70&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
  }
};


// Function to fetch default images (images that aren't search-specific)
export const fetchDefaultImages = async (setImages, setLoading) => {
  setLoading(true);
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos?per_page=70&client_id=${UNSPLASH_ACCESS_KEY}`
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



