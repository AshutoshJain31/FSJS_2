# DOM Assignment 7 Solution

## Task 1

Remove the languages that have 2.0 in their name

![](./ass7.1-before.png)

- ## Solution

```js
const lng=document.querySelector('.main__languages')
const course=document.getElementsByTagName('a')
const deleted=[]
for (let index = 0; index < course.length; index++) {
    const element = course[index].innerText;
    if (element.includes('2.0') ) {
        deleted.push(course[index])
        lng.removeChild(course[index])
    }   
}

```

## Task 2


![Task2](./ass7.2-before.png)

- ## Solution

```js
const inputbox=document.querySelector("body > div > section > div.main__form > form > input")
const btn=document.querySelector('form')

// btn.disabled=false

inputbox.setAttribute('value',"javaScript")

btn.addEventListener('submit',function(event){
    event.preventDefault();
    deleted.filter(Boolean).forEach(function(element){
        lng.appendChild(element)
    })  
});
```