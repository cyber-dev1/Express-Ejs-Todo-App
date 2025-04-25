let btn = document.querySelector(".del-btn") ;
let title = document.querySelector(".js-todo-title")
let desc = document.querySelector(".js-todo-desc") ;
let checkbox = document.querySelector('.js-is-complate')

title.addEventListener("change", async (evt) => {
    let id = evt.target.dataset.id ;
    const req = await fetch(`http://localhost:5000/api/todos/update/${id}`, {
        method : "PUT",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({todo_title : evt.target.value})
    });
    const res = await req.json() ;
    console.log(res)
}); 
desc.addEventListener("change", async (evt) => {
    let id = evt.target.dataset.id ;
    const req = await fetch(`http://localhost:5000/api/todos/update/${id}`, {
        method : "PUT",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({todo_desc : evt.target.value})
    });
    const res = await req.json() ;
    console.log(res)
}); 
checkbox.addEventListener("change", async (evt) => {
    let id = evt.target.dataset.id;
    const req = await fetch(`http://localhost:5000/api/todos/update/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ is_complate: evt.target.checked }) // Checkbox holatini yuboramiz
    });
    const res = await req.json();
    console.log(res);
});