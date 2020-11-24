const toDoForm = document.querySelector(".js-toDoForm"),
	toDoInput = toDoForm.querySelector("input"),
	toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
const toDos = [];

function paintToDo(text){
	console.log(text);
	const li = document.createElement("li"); //html 요소를 생성
	const delBtn = document.createElement("button");
	delBtn.innerText="X";
	const span = document.createElement("span");
	span.innerText = text;
	li.appendChild(delBtn);
	li.appendChild(span);
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: toDos.length +1		
	};
	toDos.push(toDoObj);
}
function handleSubmit(event){
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value="";
	
}

function loadToDos(){
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if(loadedToDos === null){ //todolist없으면
		
	} else { //있으면
		
	}
}
	
function init(){
	loadToDos();
	toDoForm.addEventListener("submit", handleSubmit)
}
init();