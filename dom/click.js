var button = document.querySelector("button");
var body = document.querySelector("body");
isPurple = false
button.addEventListener("click", function(){
	if(isPurple === false)
	{
		body.style.background = "purple";
		isPurple = true;
	}
	else
	{
		body.style.background = "white";
		isPurple = false;
	}
});