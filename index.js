import{a as d,S as f,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="50513820-fe52286b6fb0f12cd684dc96e";d.defaults.baseURL="https://pixabay.com/api/";const p=async o=>(await d.get("",{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data,u=document.querySelector(".gallery"),c=u.querySelector(".loader");let n;const y=()=>{c.innerHTML="Loading images, please wait...",c.classList.remove("visually-hidden")},g=()=>c.classList.add("visually-hidden"),h=()=>u.querySelectorAll(".gallery-item").forEach(o=>o.remove()),b=({webformatURL:o,largeImageURL:t,tags:s,likes:a,views:e,comments:r,downloads:i})=>`
	<li class="gallery-item">
		<a href="${t}">
			<img src="${o}" data-src="${t}" alt="${s}" />
		</a>
		<div class="info">
			<p>
				<b>Likes</b>
				${a}
			</p>
			<p>
				<b>Views</b>
				${e}
			</p>
			<p>
				<b>Comments</b>
				${r}
			</p>
			<p>
				<b>Downloads</b>
				${i}
			</p>
		</div>
	</li>
	`,L=o=>{const t=o.reduce((s,a)=>s+=b(a),"");document.querySelector(".gallery").insertAdjacentHTML("beforeend",t),n?n.refresh():n=new f(".gallery a",{captionsData:"alt",captionDelay:250})},v=document.querySelector(".form");v.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim()??"";if(t===""){l.error({title:"Error!",message:"Failed to load images"});return}h(),y(),p(t).then(s=>{s.hits.length>0?L(s.hits):l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(()=>{l.error({title:"Error!",message:"Failed to load images"})}).finally(g)});
//# sourceMappingURL=index.js.map
