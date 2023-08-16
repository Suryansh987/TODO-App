let container = document.getElementById("container")
let updateTodo = () => {
    container.innerHTML = `<div class="heading">TO DO's</div>`
    Object.keys(localStorage).forEach(key => {
        container.innerHTML += `
        <div class="todos">${localStorage.getItem(key)} 
        <button class="del" data-key="${key}">X</button></div>
        `
    })
    attachEventListeners()
}
attachEventListeners = () => {
    let delbtn = Array.from(document.querySelectorAll(".del"))
    delbtn.forEach(element => {
        element.addEventListener('click', removeFromStorage => {
            let key = element.getAttribute('data-key')
            localStorage.removeItem(key)
            document.getElementById("todo-alert").style.display = "flex"
            setTimeout(myFunc =>{
                document.getElementById("todo-alert").style.display = "none"
            },3000)
            updateTodo()
        })
    })
}
updateTodo()
