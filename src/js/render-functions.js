import { getPhotos } from "./pixabay-api";

const myForm = document.querySelector(".form")


myForm.addEventListener("submit", getImg)


function getImg(event) {
    event.preventDefault()
    const inputValue = event.target.elements.search.value
    getPhotos(inputValue.toLowerCase()).then(photo => {
         console.log(photo)
     })

    
    
    
    
    event.target.reset()
}

