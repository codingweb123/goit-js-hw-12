import{S as L,a as y,i}from"./assets/vendor-B3Lscd_h.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const c=document.querySelector(".gallery"),f=c.querySelector(".loader"),m=c.querySelector(".more");let u;const v=()=>f.classList.remove("visually-hidden"),q=()=>f.classList.add("visually-hidden"),P=()=>m.classList.remove("visually-hidden"),d=()=>m.classList.add("visually-hidden"),S=()=>c.querySelectorAll(".gallery-item").forEach(r=>r.remove()),A=({webformatURL:r,largeImageURL:e,tags:s,likes:a,views:t,comments:o,downloads:l})=>`
	<li class="gallery-item">
		<a href="${e}">
			<img src="${r}" data-src="${e}" alt="${s}" />
		</a>
		<div class="info">
			<p>
				<b>Likes</b>
				${a}
			</p>
			<p>
				<b>Views</b>
				${t}
			</p>
			<p>
				<b>Comments</b>
				${o}
			</p>
			<p>
				<b>Downloads</b>
				${l}
			</p>
		</div>
	</li>
	`,E=r=>{const e=r.reduce((s,a)=>s+=A(a),"");c.querySelector(".helpers").insertAdjacentHTML("beforebegin",e),u?u.refresh():u=new L(".gallery a",{captionsData:"alt",captionDelay:250})},$="50513820-fe52286b6fb0f12cd684dc96e",p=15;y.defaults.baseURL="https://pixabay.com/api/";const w=async(r,e)=>(await y.get("",{params:{key:$,q:r,page:e,per_page:p,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data;let n=1;const M=document.querySelector(".gallery"),B=()=>n=1,g=r=>{const e=r.elements["search-text"].value.trim()||"";return e||(i.error({title:"Error!",message:"Failed to load images"}),!1)},h=async r=>{d(),v(),w(r,n).then(({hits:e,totalHits:s})=>{if(!e.length){i.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!"});return}E(e),n*p<s?(n+=1,P()):(d(),i.info({message:"We're sorry, but you've reached the end of search results."})),scrollBy({top:-M.getBoundingClientRect().y*2,behavior:"smooth"})}).catch(()=>{i.error({title:"Error!",message:"Failed to load images"})}).finally(q)},b=document.querySelector(".form"),_=document.querySelector(".gallery .more");b.addEventListener("submit",async r=>{r.preventDefault();const e=g(r.target);e&&(B(),S(),await h(e))});_.addEventListener("click",async r=>{r.preventDefault();const e=g(b);e&&await h(e)});
//# sourceMappingURL=index.js.map
