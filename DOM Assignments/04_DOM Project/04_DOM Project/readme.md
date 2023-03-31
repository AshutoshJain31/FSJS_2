# DOM Assignment 4 Solution

## Task

![Task](./Output/DOM%20P1%20SS.png)

- ## Solution

```js
const cards=document.querySelectorAll('.clash-card__unit-stats')
        const colors=['#EC9B3B','#EE5487','#F6901A','#82BB30','#4FACFF']
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const border =card.querySelector('.no-border');
            card.style.backgroundColor=colors[i]
            card.style.color='white';
            border.style.color='white';
            console.log(border);
        }
        console.log(cards);
```