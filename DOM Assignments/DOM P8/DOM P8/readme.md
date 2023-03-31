# Assignment 8 Solution

## Task 1
 Add element into sidebar container

![Task1](./ass8.1-before.png)

- ## Solution
```js
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
document.querySelector("body > main > section.row.first-row")
```

## Task 2
 
 Remove Background Image

![Task 2](./ass8.2-before.png)

- ## Solution

```js
document.body.style.backgroundImage = "none";
```

## Task 3

Display the navbar on clicking Toggle button

![Task 3](./ass8.3-before.png)

- ## Solution

```js
let toggler = document.querySelector('[data-id="2"]');
let navbarCollapse = document.getElementById('navbarTogglerDemo01')

toggler.addEventListener('click',() => {
    navbarCollapse.classList.toggle('collapse')
})
```


