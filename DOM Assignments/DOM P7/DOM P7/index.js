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
