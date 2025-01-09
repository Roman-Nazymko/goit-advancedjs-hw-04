import{S as f,i as c}from"./assets/vendor-B07T6_gy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="48052326-a21cff1b214fe82d8f7d2f49f",g="https://pixabay.com/api/",d=s=>{const o=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:200});return fetch(`${g}?${o.toString()}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},p=({webformatURL:s,largeImageURL:o,tags:r,likes:i,views:e,comments:t,downloads:a})=>`
          <li class='gallery-card'>
              <a href="${o}">
                  <img class="gallery-img" src="${s}" alt="${r} loading='lazy" />
              </a>
              <div class="gallery-info">
                  <p class="gallery-info-item">
                      <b>Likes</b>${i}
                  </p>
                      <p class="gallery-info-item">
                  <b>Views</b>${e}
                  </p>
                  <p class="gallery-info-item">
                      <b>Comments</b>${t}
                  </p>
                  <p class="gallery-info-item">
                      <b>Downloads</b>${a}
                  </p>
              </div>
            </li>`,l=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),h=document.querySelector(".loader");let y=new f(".js-gallery a");const n=()=>{h.classList.toggle("is-hidden")},b=s=>{s.preventDefault();const o=l.elements.user_query.value.trim();o!==""&&(u.innerHTML="",n(),d(o).then(r=>{if(n(),r.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=r.hits.map(e=>p(e)).join("");u.innerHTML=i,y.refresh(),l.reset()}).catch(r=>{n(),console.log(r),c.error({message:`${r}`,position:"topRight"})}))};l.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
