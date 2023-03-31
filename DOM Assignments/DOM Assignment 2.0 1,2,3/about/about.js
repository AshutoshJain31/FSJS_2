let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
let wrapper= document.querySelector(".accordian-wrapper");

let div = document.createElement("div");
let h3 = document.createElement("h3");
let p = document.createElement('p');

div.classList.add('accordian');

h3.textContent = "Skills";
p.textContent = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.";

div.appendChild(h3);
div.appendChild(p);
wrapper.appendChild(div);