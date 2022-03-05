let toggleBtn = document.querySelector('.toggle-btn')
let bodyElement = document.querySelector('body')
let todoinput = document.querySelector('.todo-input')
let todobtn = document.querySelector('.todo-btn')
let todolist = document.querySelector('.todo-list')

toggleBtn.addEventListener('click', switchtheme)
todobtn.addEventListener('click',addtodo)
document.addEventListener('DOMContentLoaded', getTodoListOnLoad);

todolist.addEventListener('click',deletebtn );


function setLightTheme(){
    bodyElement.classList.toggle('light')
}
function switchtheme() {
  let lightkMode = localStorage.getItem('light')
  if (lightkMode !== 'on') {
      setLightTheme()
      lightMode = localStorage.setItem('light', 'off')
  }
}
let lightMode = localStorage.getItem('light')
if(lightMode === 'on'){
    setLightTheme()
    lightMode = localStorage.setItem('light', 'on')   
}
function addtodo(e){
    e.preventDefault()
    let todoDiv=document.createElement('div')
    let newitem = `<li>${todoinput.value}</li>
        <i class="far fa-trash-alt"></i>`
        
    todoDiv.innerHTML=newitem
    todolist.appendChild(todoDiv)
    todoDiv.classList.add('edit')

    saveToLocalStorage(todoinput.value)

    todoinput.value="";
}
function saveToLocalStorage(todo){
    let todos
    if(localStorage.getItem('todos')==null){
        todos=[]
        }
        else {
            todos=JSON.parse(localStorage.getItem('todos'))
        }
    todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(todos))
}
function getTodoListOnLoad(){
    if(localStorage.getItem('todos')){
        todos=JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach((todo)=>{
        let todoDiv=document.createElement('div')
        let newitem = `<li>${todo}</li>
        <i class="far fa-trash-alt"></i>`
      todoDiv.innerHTML= newitem;
      todolist.appendChild(todoDiv)
      todoDiv.classList.add('edit')

    })
}
function deletebtn(e){
    if(e.target.classList.contains('fa-trash-alt'))
    deletetask(e)
   
}
function deletetask(e){
    let array=JSON.parse(localStorage.getItem('todos'))
    let task = e.target.parentNode;
    let deltask=array.indexOf(task.innerText)
    array.splice(deltask, 1)
    localStorage.setItem('todos', JSON.stringify(array))
    task.remove();
 }

 
   