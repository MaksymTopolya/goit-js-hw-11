import{i as c,S as l}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u({webformatURL:i,largeImageURL:s,tags:r,likes:o,views:e,comments:t,downloads:n}){return`
        <li class="list-item">
            <a href="${s}" class="photo" data-lightbox="photos">
                <img src="${i}" class="photo" data-img="${s}">
            </a>
            <div class="desc">
                <ul class="info">
                    <li class="mini-item">
                        <h3 class="mini-title">Likes</h3>
                        <p class="about-photo">${o}</p>
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
    `}function m(i){return i.map(u).join("")}function h(i){p();const s="https://pixabay.com",r="/api/",o=new URLSearchParams({key:"43031538-631b2ceb9342d78106785df9b",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${r}?${o}`;return fetch(e).then(t=>t.json()).then(t=>t).finally(t=>{d()})}const a=document.querySelector(".loading");function p(){a.classList.remove("hide")}function d(){a.classList.add("hide")}const f=document.querySelector(".form"),g=document.querySelector(".list");document.querySelector(".loading");f.addEventListener("submit",y);function y(i){i.preventDefault();const s=i.target.elements.search.value;h(s.toLowerCase()).then(r=>{const o=r.hits;if(o.length===0)return Promise.reject("length");const e=m(o);g.innerHTML=e,b()}).catch(r=>{const o={length:"Sorry, there are no images matching your search query. Please try again!"};return c.error({title:"Hey",message:o[r],theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"})}).finally(()=>{i.target.reset()})}function b(){new l(".list-item a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=commonHelpers.js.map
