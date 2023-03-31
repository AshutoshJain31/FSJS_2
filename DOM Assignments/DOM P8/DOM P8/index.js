const aside=document.querySelector("body > main > section.row.first-row > .col-lg-4")
const head2=document.createElement('h2')
const para=document.createElement('p')
head2.setAttribute('class','new-head')
para.setAttribute('class','new-p"')
head2.innerText='This is my Custome Heading'
para.innerText='hat are the possible adverse effects of on-demand AI imagegeneration?'
aside.appendChild(head2)
aside.appendChild(para)
console.log(aside);
// document.querySelector("body > main > section.row.first-row > aside")
document.querySelector("body > main > section.row.first-row")

document.body.style.backgroundImage = "none";

let toggler = document.querySelector('[data-id="2"]');
let navbarCollapse = document.getElementById('navbarTogglerDemo01')

toggler.addEventListener('click',() => {
    navbarCollapse.classList.toggle('collapse')});