!function(t){var n={};n.resizeEvt="orientationchange"in window?"orientationchange":"resize",n.Html=t.getElementsByTagName("html")[0],n.widthProportion=function(){var e=Number((t.body&&t.body.clientWidth||n.Html.offsetWidth)/750).toFixed(3);return 1.021<e?1.021:e<.427?.427:e},n.changePage=function(){n.Html.setAttribute("style","font-size: "+100*n.widthProportion()+"px"),n.correctPx()},n.correctPx=function(){var e=document.documentElement,t=e.clientWidth;if(t&&!(768<t)){var n=document.createElement("div");n.style.width="1.4rem",n.style.height="0",document.body.appendChild(n);var i=140*t/750,o=n.clientWidth/i;(1.2<o||o<.8)&&(e.style.fontSize=t/750*100/o+"px",document.body.removeChild(n))}},n.changePage(),document.addEventListener&&(window.addEventListener(n.resizeEvt,n.changePage,!1),document.addEventListener("DOMContentLoaded",n.changePage,!1))}(document);