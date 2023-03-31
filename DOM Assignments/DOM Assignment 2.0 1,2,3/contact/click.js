const input={
    usrname:document.querySelector(".mainRight > form > input.userName"),
    usremail:document.querySelector(".mainRight > form > input.userEmail"),
    usrmessage:document.querySelector(".mainRight > form > textarea.userMessage")
}
const output={
    outputUsername:document.querySelector(".mainLeft > form > input.enterName"),
    outputemail:document.querySelector(".mainLeft > form > input.enterMail"),
    outputmessage:document.querySelector(".mainLeft > form > textarea.enterMessage")
    
}
const form=document.querySelector("body > main > div.mainRight > form ")
console.log(input);
console.log(output);
// input.usrname.addEventListener('change', function(event)
// {
//     console.log(event.target.value);
//     output.outputUsername.value=event.target.value
// }

form.addEventListener('submit',function(event)
{
    event.preventDefault()
    output.outputUsername.value=input.usrname.value
    output.outputemail.value=input.usremail.value
    output.outputmessage.value=input.usrmessage.value
})
form.addEventListener('reset',function(event)
{
    event.preventDefault()
    output.outputUsername.value=""
    output.outputemail.value=""
    output.outputmessage.value=""
    input.usrname.value=""
    input.usremail.value=""
    input.usrmessage.value=""
})




