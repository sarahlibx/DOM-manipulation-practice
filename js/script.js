const firstListItem = document.querySelector("ul li");
//console.log(firstListItem.outerHTML);
firstListItem.style.textTransform = "uppercase";

const moreReasons = document.querySelector(".more-reasons");
//console.log(moreReasons.outerHTML);
moreReasons.style.fontSize = "2.5em";

const whyJS = document.querySelector("H3");
//console.log(whyJS.outerHTML);
whyJS.innerHTML = 'Why learn <span class="highlight">JavaScript</span>?';

const highlight = document.querySelector(".highlight");
//console.log(highlight);
highlight.style.backgroundColor = "#ffff82";

const mainImage = document.querySelector("img");
//console.log(mainImage.outerHTML);
mainImage.src = "img/js-code.png";
mainImage.alt = "JS code example";
//console.log(mainImage.alt);
