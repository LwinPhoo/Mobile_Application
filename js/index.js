"use strict";

window.addEventListener("DOMContentLoaded",
    function ()
{
    const item = document.querySelectorAll(".item01, .item02");
    item.forEach(function (element, index){
setTimeout(function(){
    element.classList.add("popup");
},100 * index);
    });
}, false

);