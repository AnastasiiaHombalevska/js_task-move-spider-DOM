document.addEventListener("click",function(t){var e=document.querySelector(".wall"),i=document.querySelector(".spider");if(e.contains(t.target)){var n=t.offsetX,a=t.offsetY,c=i.width,l=i.height;n=Math.max(c/2,Math.min(n,e.clientWidth-c/2)),a=Math.max(l/2,Math.min(a,e.clientHeight-l/2)),i.style.left=n-c/2+"px",i.style.top=a-l/2+"px"}});
//# sourceMappingURL=index.0614484e.js.map
