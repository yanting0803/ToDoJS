var submitBtn = document.getElementById('submit_btn');
var todoResult = document.getElementById('todo_result');
submitBtn.addEventListener('click', function() {
	var todoInput = document.getElementById('todo_input').value;
	if (todoInput !== '') {
		var todo = document.createElement('li');
		todo.innerHTML = todoInput + '<button>X</button>';
		todoResult.appendChild(todo);
		document.getElementById('todo_input').value = '';
	} else {
		alert("please input value!!");
	}
});

todoResult.addEventListener('click', function(e) {
	e.target.parentNode.parentNode.removeChild(e.target.parentNode);
});