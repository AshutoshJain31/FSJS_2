# DOM Assignment 1 Solution

## Task 1

Add new list item at the last of the nav list

![Task 1](./firstAssignmentImage/task1Output.png)

- ## code
```js
let navbar = document.querySelector(".nav-list");

let li = document.createElement('li');
let a = document.createElement('a');

a.setAttribute('href','#')
a.innerHTML = "Hire Me";

li.appendChild(a);
navbar.appendChild(li);
```

## Task 2

Remove Social Media Icons from the footer and add placeholder in search box

![Task2](./firstAssignmentImage/task2Output.png)

- ## Solution

```js
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

```

 ## Task 3

Change the Text of about section
![Task 3](./firstAssignmentImage/task3Output.png)

- ## Solution

```js
const span2=document.querySelector(' div.hero-left-section > p > span:nth-child(5)').innerHTML="iNeuron Intelligence Pvt Ltd."
```

## Task 4

Add the profile picture.
![Task 4](./firstAssignmentImage/task4Output.png)

- ## Solution
```js
let image=document.querySelector('body > section > div.hero-right-section > img')
image.src="./firstAssignmentImage/image.png."
```

## Task 5 

Add 'support me' button just after 'chat with me' button.
![Task 5](./firstAssignmentImage/task5Output.png)

- ## Solution
```js
let query=document.querySelector('.hero-right-section-btns')
    let btn=document.createElement('button')
    let text=document.createTextNode('Support Me')
    let withtext=btn.appendChild(text)
    query.appendChild(btn)
```


