//your code here
let inpuT =document.getElementById("newTodoInput");
let button =document.getElementById("addTodoBtn");
let todo = document.getElementById("todoList");

button.addEventListener("click", function(){
	let input = inpuT.value.trim();
	if(input !== "" )
	{
		const Li = document.createElement("li");
		Li.textContent = input;

		todo.appendChild(Li);

		inpuT.value = "";
	}
});
