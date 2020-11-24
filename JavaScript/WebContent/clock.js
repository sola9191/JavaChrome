const clockContainer = document.querySelector(".js-clock"), 
	clockTitle = clockContainer.querySelector("h1");

function getTime(){
	const date = new Date();
	const mins = date.getMinutes();
	const hours = date.getHours();
	const sec = date.getSeconds();
	clockTitle.innerText = 
	   `${ hours < 10? `0${hours}` : hours }:${ mins < 10? `0${mins}` : mins }:${ sec < 10 ? `0${sec}` : sec 
	}` ;
}

function init() { //현재시간 얻기	
	getTime();
	setInterval(getTime, 1000); //함수명, 시간
}

init();