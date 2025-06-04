import{a as y,S as L,i}from"./assets/vendor-CrlV4O_2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const v="50513820-fe52286b6fb0f12cd684dc96e",f=15;y.defaults.baseURL="https://pixabay.com/api/";const q=async(r,e)=>(await y.get("",{params:{key:v,q:r,page:e,per_page:f,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data,u=document.querySelector(".gallery"),m=u.querySelector(".loader"),p=u.querySelector(".more");let c;const S=()=>m.classList.remove("visually-hidden"),P=()=>m.classList.add("visually-hidden"),A=()=>p.classList.remove("visually-hidden"),d=()=>p.classList.add("visually-hidden"),E=()=>u.querySelectorAll(".gallery-item").forEach(r=>r.remove()),$=({webformatURL:r,largeImageURL:e,tags:s,likes:a,views:t,comments:o,downloads:l})=>`
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
	`,M=r=>{const e=r.reduce((s,a)=>s+=$(a),"");document.querySelector(".gallery .helpers").insertAdjacentHTML("beforebegin",e),c?c.refresh():c=new L(".gallery a",{captionsData:"alt",captionDelay:250})},g=document.querySelector(".form"),w=document.querySelector(".gallery .more"),B=document.querySelector(".gallery");let n=1;g.addEventListener("submit",r=>{r.preventDefault();const e=h(r.target);e&&(n=1,E(),b(e))});const h=r=>{const e=r.elements["search-text"].value.trim()||"";return e||(i.error({title:"Error!",message:"Failed to load images"}),!1)},b=r=>{d(),S(),q(r,n).then(({hits:e,totalHits:s})=>{if(!e.length){i.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!"});return}M(e),n*f<s?(n+=1,A()):(d(),i.info({message:"We're sorry, but you've reached the end of search results."})),scrollBy({top:-B.getBoundingClientRect().y*2,behavior:"smooth"})}).catch(()=>{i.error({title:"Error!",message:"Failed to load images"})}).finally(P)};w.addEventListener("click",r=>{r.preventDefault();const e=h(g);e&&b(e)});
//# sourceMappingURL=index.js.map
