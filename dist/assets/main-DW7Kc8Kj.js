const l=document.querySelectorAll(".tab");l.forEach(e=>e.addEventListener("click",()=>{e.classList.toggle("hidden"),console.log("fdfds")}));window.onclick=function(e){if(!e.target.matches(".select-button"))for(var s=document.getElementsByClassName("select-dropdown"),t=0;t<s.length;t++){var c=s[t];c.classList.contains("show")&&c.classList.remove("show")}};