
import { markupMyImages, markupMyImg } from "./js/render-functions";
import { getPhotos } from './js/pixabay-api';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const myForm = document.querySelector(".form");
const list = document.querySelector(".list");
const loading = document.querySelector(".loading");

myForm.addEventListener("submit", getImg);

function getImg(event) {
    event.preventDefault();
    const inputValue = event.target.elements.search.value;
    
    getPhotos(inputValue.toLowerCase())
        .then(response => {
            const photos = response.hits; 
            if (photos.length === 0) {
               return Promise.reject("length")
            }
            const markup = markupMyImg(photos);
            list.innerHTML = markup;
            initializeLightbox();
        }).catch((error) => {
            const errorMap = {
                length: `Sorry, there are no images matching your search query. Please try again!`
            }
            return iziToast.error({
           title: 'Hey',
           message: errorMap[error],
           theme: 'dark',
          backgroundColor: 'red',
          position: 'topCenter',
          color: 'black',
});
        })
        .finally(() => {
            event.target.reset();
        });
}

function initializeLightbox() {
    const lightbox = new SimpleLightbox('.list-item a', {
        captionsData: 'alt',
        captionDelay: 250, 
    });
}