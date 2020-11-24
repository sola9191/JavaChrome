const form = document.querySelector(".js-form"), //querySelector: 원하는 셀렉터는 다가져옴 클래스나 css방식으로
	input = form.querySelector("input"),        //첫번째로 찾은것을 가져옴
	greeting = document.querySelector(".js-greeting"); //querySelectAll은 모든걸 다가져옴 
//getElementbyID는 태그로 엘리먼트 가져옴 
//input, body, html, div, section..
const USER_LS = "currentUser",
	SHOWING_CN = "showing";

function saveName(text){
	localStorage.setItem(USER_LS, text);
}
function handleSubmit(event){
	//form을 제출하는 event가 발생하면 프로그램 되어진 다른곳으로가서 새로고침이됨!!!!
	event.preventDefault(); //위의 주석을 막는 코드
	const currentValue = input.value;
	console.log(currentValue);
	paintGreeting(currentValue);
	saveName(currentValue);

}
function askForName(){
	form.classList.add(SHOWING_CN);
	form.addEventListener("submit", handleSubmit);
	
}
function paintGreeting(text){
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello ${text}`
}

function loadName(){
	const currentUser = localStorage.getItem(USER_LS);
	if(currentUser === null){ //유저 없을때
		askForName();
	} else { //유저 있을때
		paintGreeting(currentUser);
	}
}

function init(){
	loadName();
}

init();