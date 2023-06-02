import axios from "axios";


const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID YRRq9SxjHnK4G9gDERsgqmyHde5R6misNXWH95K7kA0",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};
export default searchImages;
