export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c62d9f308fmsha2ab59d62bd9cf1p1c4f26jsn78cff4170d6c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c62d9f308fmsha2ab59d62bd9cf1p1c4f26jsn78cff4170d6c',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
