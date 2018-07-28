//Check off specific todos by clicking
$('ul').on("click", "li", function () {
	$(this).toggleClass("checked");
})

//Click on X to delete todo
$('ul').on("click", "span", function(event) {
	//fade out and remove the parent li
	$(this).parent().fadeOut("slow", function() {
		$(this).remove();	
	})
	event.stopPropagation();
})

//Add new todo to the list
$("input[type='text']").on("keypress", function (event) {
	if(event.which === 13)
	{
		//Extract new todo entered from input
		var newTodo = $(this).val();
		$(this).val("");
		//Add new todo to the list
		$('ul').append("<li><span><i class='fa fa-trash'></i> </span>"+newTodo+"</li>");
	}
	// body...
})

$(".fa-plus").click( function () {
	// body...
	$("input[type='text']").fadeToggle();
})