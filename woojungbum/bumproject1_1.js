
const title = document.querySelector("#title");

const BASE_COLOR = "blue";
const OTHER_COLOR = "red";

function handleClick() {
	if (BASE_COLOR === title.style.color/*이거 "Blue" 를 넣어서 틀렸었음;;*/) {
		title.style.color = OTHER_COLOR;
	} else {
		title.style.color = BASE_COLOR;
	}

	};

function init() {
	title.style.color = BASE_COLOR;
	title.addEventListener("click", handleClick);
}

init();


title.addEventListener("click", handleClick);