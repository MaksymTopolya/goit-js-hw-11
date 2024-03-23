
export function getPhotos(query) {
    startLoading()
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
  return fetch(url)
    .then(res => res.json())
      .then(data => {
          hideLoading()
          return data; 
      })
}

const loading = document.querySelector(".loading");

function startLoading() {
    loading.classList.remove("hide"); 
}

function hideLoading() {
    loading.classList.add("hide"); 
}
