const PIXABAY_API_KEY = '48052326-a21cff1b214fe82d8f7d2f49f';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = searchedQuery => {
  const urlParams = new URLSearchParams({
    key: PIXABAY_API_KEY,
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 200,
  });
  return fetch(`${BASE_URL}?${urlParams.toString()}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
