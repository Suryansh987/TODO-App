let addbtn = document.getElementById("add")
let todo = document.getElementById("todo")
addbtn.addEventListener("click", addtolocal =>{
    if(todo.value.trim()!==""){
    let time = new Date().getTime()
    localStorage.setItem(`todo_${time}`,todo.value)
    todo.value=""
    document.getElementById("todo-success-alert").style.display = "flex"
    setTimeout(myFunc =>{
        document.getElementById("todo-success-alert").style.display = "none"
    },3000)
}
else{
    document.getElementById("todo-error-alert").style.display = "flex"
    setTimeout(myFunc =>{
        document.getElementById("todo-error-alert").style.display = "none"
    },3000)
    todo.value=""
}

})