const inputBox = document.querySelector(".inputField input");
// document.queryselector = only choose 1 selector of css
const addBtn = document.querySelector(".inputField button");
// document.queryselector = only button choose
const todolist = document.querySelector(".todolist");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{ // when your key press
    let userData = inputBox.value; // getting user entered value
    if(userData.trim()!=0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("remove");
    }

}

showTasks(); // you can to seee always showlist 

addBtn.onclick = ()=>{
    let userData = inputBox.value; // getting user entered value
    let getLocalStorage = localStorage.getItem("새로운 할일"); //getting localstorage
    if(getLocalStorage == null){ //if localstorage is null
        listArr = []; //creating blank array < - input value
    }else{
        listArr = JSON.parse(getLocalStorage); // transform string to json objects
    }
    listArr.push(userData);
    localStorage.setItem("새로운 할일", JSON.stringify(listArr)); // transforming js objects into a json string
    showTasks(); //calling newlitag
    addBtn.classList.remove("remove");
}


// function to add task list inside ul
function showTasks(){ // Listshow function
    let getLocalStorage = localStorage.getItem("새로운 할일"); //getting localstorage
    if(getLocalStorage == null){ //if localstorage is null
        listArr = []; //creating blank array < - input value
    }else{
        listArr = JSON.parse(getLocalStorage); // transform string to json objects
    }
    const pendingNumber = document.querySelector(".pendingNumber");
    pendingNumber.textContent = listArr.length; // Text content can be imported or modified.
    if(listArr.length > 0){ // if array length is greater than 0
        deleteAllBtn.classList.add("active"); // deleteAllBtn activation
    }else{
        deleteAllBtn.classList.remove("active");
    }
    let newLitag = '';
    listArr.forEach((element, index) => {
        newLitag += `<li> ${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span>`;
    });
    todolist.innerHTML = newLitag; // this is markuplanguage that html coding value show screen 
    inputBox.value = "";
}


// delete task function
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("새로운 할일"); //getting localstorage
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1); //delete or remove the particular indexed list
    localStorage.setItem("새로운 할일", JSON.stringify(listArr));
    showTasks();
}


// delete all tasks function
deleteAllBtn.onclick = ()=>{
    listArr=[]; // empty an array
    localStorage.setItem("새로운 할일", JSON.stringify(listArr)); // transforming js objects into a json string
    showTasks();
}