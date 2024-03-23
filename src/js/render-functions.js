import { getPhotos } from './pixabay-api';
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
               return  iziToast.error({
                title: 'Hey',
                message: `Sorry, there are no images matching your search query. Please try again!`,
                   theme: 'dark',
                backgroundColor: 'red',
                position: 'topCenter',
                     color: 'black', 
            });
            }
            const markup = markupMyImg(photos);
            list.innerHTML = markup;
            initializeLightbox();
        }).finally(() => {
            event.target.reset();
        });
}

function markupMyImages({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
    return `
        <li class="list-item">
            <a href="${largeImageURL}" class="photo" data-lightbox="photos">
                <img src="${webformatURL}" class="photo" data-img="${largeImageURL}">
            </a>
            <div class="desc">
                <ul class="info">
                    <li class="mini-item">
                        <h3 class="mini-title">Likes</h3>
                        <p class="about-photo">${likes}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Views</h3>
                        <p class="about-photo">${views}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Comments</h3>
                        <p class="about-photo">${comments}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Downloads</h3>
                        <p class="about-photo">${downloads}</p>
                    </li>
                </ul>
            </div>
        </li>
    `;
}

function markupMyImg(arr) {
    return arr.map(markupMyImages).join('');
}

function initializeLightbox() {
    const lightbox = new SimpleLightbox('.list-item a', {
        captionsData: 'alt',
        captionDelay: 250, 
    });
}

