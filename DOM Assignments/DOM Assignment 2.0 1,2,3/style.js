// First Assignment task 1
// let header=document.querySelector('#navele')
// let remove=document.querySelector('.contact')
// // header.removeChild(remove);
// let li1=document.createElement('li');
// let a1=document.createElement('a');
// let li2=document.createElement('li');
// let a2=document.createElement('a');
// let project=document.createTextNode("Project")
// let Hire=document.createTextNode("Hire me")

// a1.appendChild(project);
// li1.appendChild(a1);
// a2.appendChild(Hire);
// li2.appendChild(a2);
// header.appendChild(li1);
// header.appendChild(li2);
let navbar = document.querySelector(".nav-list");

let li = document.createElement('li');
let a = document.createElement('a');

a.setAttribute('href','#')
a.innerHTML = "Hire Me";

li.appendChild(a);
navbar.appendChild(li);
// //First Assignment task 2
let header=document.querySelector('#navele')
let remove=document.querySelector('.contact')
// header.removeChild(remove);
let li1=document.createElement('li');
let a1=document.createElement('a');
let project=document.createTextNode("Project")
a1.appendChild(project);
 li1.appendChild(a1);
 header.appendChild(li1);


 let search_div = document.querySelector('.search-field');
let input_box = search_div.firstElementChild;
// input_box.setAttribute('placeholder','search My Project');
input_box.placeholder = "search My Project";

let logos = document.querySelector(".logos");
logos.style.display = "none";
let footer = document.querySelector("footer");
footer.style.display = 'block';
footer.style.width = "60%";
footer.style.marginLeft = 'auto';
footer.style.marginRight = 'auto';

//First assignment task 2

 let text=document.getElementById('innerspan');
text.innerHTML="An Employee";

// const spans=document.getElementsByClassName('hero-left-section')
const span2=document.querySelector(' div.hero-left-section > p > span:nth-child(5)').innerHTML="iNeuron Intelligence Pvt Ltd."
console.log(span2)

// First assignment task 3
let image=document.querySelector('body > section > div.hero-righ    t-section')
console.log(image);


