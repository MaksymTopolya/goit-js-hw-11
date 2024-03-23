import{i as c,S as l}from"./assets/vendor-5b791d57.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(o){m();const i="https://pixabay.com",r="/api/",s=new URLSearchParams({key:"43031538-631b2ceb9342d78106785df9b",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${i}${r}?${s}`;return fetch(e).then(t=>t.json()).then(t=>(d(),t))}const a=document.querySelector(".loading");function m(){a.classList.remove("hide")}function d(){a.classList.add("hide")}const p=document.querySelector(".form"),h=document.querySelector(".list");document.querySelector(".loading");p.addEventListener("submit",f);function f(o){o.preventDefault();const i=o.target.elements.search.value;u(i.toLowerCase()).then(r=>{const s=r.hits;if(s.length===0)return c.error({title:"Hey",message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"});const e=y(s);h.innerHTML=e,b()}).finally(()=>{o.target.reset()})}function g({webformatURL:o,largeImageURL:i,tags:r,likes:s,views:e,comments:t,downloads:n}){return`
        <li class="list-item">
            <a href="${i}" class="photo" data-lightbox="photos">
                <img src="${o}" class="photo" data-img="${i}">
            </a>
            <div class="desc">
                <ul class="info">
                    <li class="mini-item">
                        <h3 class="mini-title">Likes</h3>
                        <p class="about-photo">${s}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Views</h3>
                        <p class="about-photo">${e}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Comments</h3>
                        <p class="about-photo">${t}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Downloads</h3>
                        <p class="about-photo">${n}</p>
                    </li>
                </ul>
            </div>
        </li>
    `}function y(o){return o.map(g).join("")}function b(){new l(".list-item a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=commonHelpers.js.map
