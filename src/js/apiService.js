const BASE_URL = 'https://pixabay.com/api/';
const API_key = '23543549-635b4a8d9e20c5ded331689b0';

export async function fetchFindPictures(picName, page = 1, per_page = 12) {
  try {
    const url = new URL(BASE_URL);
    url.searchParams.set('key', API_key);
    url.searchParams.set('q', picName);
    url.searchParams.set('image_type', 'photo');
    url.searchParams.set('per_page', per_page);
    url.searchParams.set('page', page);
    const response = await fetch(url.toString());
    const { hits } = await response.json();
    return hits;
  } catch (error) {
    console.error(error);
    return [];
  }
}
