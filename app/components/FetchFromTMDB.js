import axios from "axios";
import { configDotenv } from "dotenv";

export const FetchFromTMDB = async (url) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer "+process.env.TMDB_KEY,
    },
  };
  const response = await axios.get(url, options);
  if (response.status !== 200) {
    throw new Error(response.data.message);
  }

  return response.data;
};
