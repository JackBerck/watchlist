import axios from "axios";

const getDataFromApi = async () => {
  try {
    const response = await axios.get(
      "http://www.omdbapi.com/?s=avengers&apikey=b59f7c1e"
    );

    return response.data.Search;
  } catch (error) {
    console.error(error);
  }
};

const getDataFromId = async (id) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${id}&apikey=b59f7c1e`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getDataFromApi, getDataFromId };
