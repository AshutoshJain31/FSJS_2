# DOM Assignment 5 Solution

## Task 

![Task](./Output/DOM%20P2%20SS.png)

- ## Solution

```js
// Fifth Assignment Solution


const recip=document.querySelector("body > main > section > div.tags-container > div")
let chines=document.createElement("a")
chines.setAttribute('href',"#")
chines.textContent="Chines(7)";
recip.appendChild(chines)

// For adding card
const card=document.querySelector('.recipe-gallery')
const div=document.createElement("div")
const href=document.createElement("a");
const image=document.createElement('img')
const heading=document.createElement('h5')
const headtext=document.createTextNode("Triple Rice")
const para=document.createElement('p')
const paratext=document.createTextNode("Prep : 10min | Cook : 40min")
image.setAttribute('src',"./img/recipe-5.jpeg")
para.appendChild(paratext)
href.setAttribute('href','#')
div.className="card";
href.className="recipe-text";
image.className="recipe-img ";
heading.className="recipe-name";
para.className="recipe-disp";
heading.appendChild(headtext)
href.appendChild(image)
href.appendChild(heading)
href.appendChild(para)
div.appendChild(href)
card.appendChild(div)
console.log(heading);
console.log(card);
```