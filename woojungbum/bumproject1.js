	const title = document.querySelector("#title");

function handleClick() {
	if (title.style.color === "blue") {
		title.style.color = "peru";
		console.log("if_done");
	} else {
		title.style.color = "blue";
		console.log("error_done");	
	};

	

	
}

title.addEventListener("click", handleClick);