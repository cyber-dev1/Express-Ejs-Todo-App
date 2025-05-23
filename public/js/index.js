let btn = document.querySelector(".del-btn");
let title = document.querySelector(".js-todo-title")
let desc = document.querySelector(".js-todo-desc");
let checkbox = document.querySelector('.js-is-complate')
let elForm = document.querySelector(".js-form") ;
let elTitle = document.querySelector(".addTitle") ;
let elDesc = document.querySelector('.addDesc') ;

elForm.addEventListener("submit", async (evt) => {
    evt.preventDefault() ;
    try {
        const req = await fetch("http://localhost:5000/api/todos/create", {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                todo_title : elTitle.value,
                todo_desc : elDesc.value, 
            }),
        });
        if(req.ok){
            const res = await req.json() ;
            window.location.href ='/'
        }
    } catch (error) {
        console.log(error)
    }
})

window.addEventListener("change", async (evt) => {
    if (evt.target.matches(".js-todo-title")) {
        let id = evt.target.dataset.id;
        const req = await fetch(`http://localhost:5000/api/todos/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ todo_title: evt.target.value })
        });
        const res = await req.json();
        console.log(res)
    }
});
window.addEventListener("change", async (evt) => {
    if (evt.target.matches(".js-todo-desc")) {
        let id = evt.target.dataset.id;
        console.log(id)
        const req = await fetch(`http://localhost:5000/api/todos/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ todo_desc: evt.target.value })
        });
        const res = await req.json();
        console.log(res)
    }
});
window.addEventListener("change", async (evt) => {
    if (evt.target.matches(".js-is-complate")) {
        let id = evt.target.dataset.id;
        const req = await fetch(`http://localhost:5000/api/todos/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ is_complate: evt.target.checked })
        });
        const res = await req.json();
        console.log(res);
    }
});
window.addEventListener("click", async (evt) => {
    if(evt.target.matches(".js-delete-btn")){
        let id = evt.target.dataset.id ;
        const req = await fetch(`http://localhost:5000/api/todos/delete/${id}`, {
            method : "DELETE",
            headers : {
                "Content-type" : "application/json"
            }
        });
        if(req.ok){
            const res = await req.json() ;
            console.log(res)
            window.location.href = "/"
        }

    }
})