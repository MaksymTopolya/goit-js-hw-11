 export function getPhotos(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
     
  const params = new URLSearchParams({
    key: '43031538-631b2ceb9342d78106785df9b',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;
     
const options = {
  headers: {
    'X-RateLimit-Limit': 1000,
    'X-RateLimit-Remaining': 50,
    'X-RateLimit-Reset': 1800,
    },
};


  return fetch(url, options)
    .then(res => res.json())
      .then(data => {
      return data;
    })
}
