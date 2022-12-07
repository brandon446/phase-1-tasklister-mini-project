document.addEventListener("DOMContentLoaded", () => {
// your code here
let form =document.getElementById("create-task-form")
form.addEventListener("submit", (e) =>{
  e.preventDefault(
    brandon(document.getElementById("new-task-description").value))
    form.reset()
})
})
function brandon(myList){
  let li=document.createElement("li")
  let btn=document.createElement("button")
  btn.textContent= " x "
  btn.addEventListener("click" , cancel)
  li.textContent= ` ${myList}`
  li.appendChild(btn)
  console.log(li)
  document.querySelector("#list").appendChild(li)

}
function cancel(e){
  e.target.parentNode.remove()
}











































