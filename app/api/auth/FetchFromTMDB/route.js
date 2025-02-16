import axios from "axios";

export const FetchFromTMDB = async (url) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTI4ZmIzMmU3NmY1OTMyMGRmMTk4ZjllMzU0YjdhMyIsIm5iZiI6MTczODc2Nzg3Ni4xMDUsInN1YiI6IjY3YTM3ZTA0ZjA4NDJmMzJkYThhODc2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qdffMkAmY3YJwFpx-UlQ2gH0xJWKAZfKJJz4FZdHVTE",
    },
  };
  const response = await axios.get(url, options);
  console.log(response);

  if (response.status !== 200) {
    throw new Error(response.data.message);
  }

  return response.data;
};

