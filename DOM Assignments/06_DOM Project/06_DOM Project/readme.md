# DOM Assignment 6 Solution

## Task 1

![Task 1](./Output/DOM%20P3%20SS-1.png)

- ## Solution

```js
let image=document.querySelector("body > main > header > img");
const span=document.querySelector('.app_price > span')
image.setAttribute('src','./assets/ineuron-logo.png')
span.innerHTML="$10"
console.log(span);

```