(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=document.querySelectorAll(".tab");i.forEach(r=>r.addEventListener("click",()=>{r.classList.toggle("hidden"),console.log("fdfds")}));window.onclick=function(r){if(!r.target.matches(".select-button"))for(var o=document.getElementsByClassName("select-dropdown"),s=0;s<o.length;s++){var n=o[s];n.classList.contains("show")&&n.classList.remove("show")}};async function l(){const o=await(await fetch("./src/layout/header/header.html")).text();document.getElementById("header").innerHTML=o}l();async function a(){const o=await(await fetch("./src/layout/footer/footer.html")).text();document.getElementById("footer").innerHTML=o}a();