const BASE_URL = "https://ghibliapi.vercel.app/films";

export const getMovies = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(
      `Movie API request failed: ${response.status} ${response.statusText}`,
    );
  }
  const data = await response.json();
  return data;
};
