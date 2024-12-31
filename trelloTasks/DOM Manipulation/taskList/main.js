let currentFilter = 'all';

function loadTasks() {
	let tasks;
	try {
			tasks = JSON.parse(localStorage.getItem('tasks')) || [];
	} catch (e) {
			console.error('Помилка при читанні даних з LocalStorage:', e);
			tasks = [];
	}
	
	if (!Array.isArray(tasks)) {
		console.warn('Очікувався масив, але отримано:', tasks);
		tasks = [];
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
	
	const taskList = document.getElementById('taskList');
	taskList.innerHTML = '';

	tasks
			.filter(task => {
				if(currentFilter === 'completed') return task.completed;
				if(currentFilter === 'pending') return !task.completed;
				return true;
			})

			.forEach((task, index) => {
			const li = document.createElement('li');
			
			const checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.checked = task.completed; 
			checkbox.addEventListener('change', () => toggleTask(index));
			
			const label = document.createElement('span');
			label.textContent = task.text;
			label.style.textDecoration = task.completed ? 'line-through' : 'none';
			
			const deletedBtn = document.createElement('button');
			deletedBtn.textContent = 'Видалити';
			deletedBtn.addEventListener('click', ()=> deleteTask(index));

			li.appendChild(checkbox);
			li.appendChild(label);
			li.appendChild(deletedBtn);
			taskList.appendChild(li);
	});
}

function addTask(event) {
	event.preventDefault();
	const taskInput = document.getElementById('taskInput');
	const taskText = taskInput.value.trim();

	if (taskText) {
			const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
			tasks.push({ text: taskText, completed: false });
			localStorage.setItem('tasks', JSON.stringify(tasks));
			taskInput.value = '';
			loadTasks();
	}
}


function toggleTask(index) {
	const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
	tasks[index].completed = !tasks[index].completed;
	localStorage.setItem('tasks', JSON.stringify(tasks));
	loadTasks();
}

function deleteTask(index){
	const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
	tasks.splice(index, 1);
	localStorage.setItem('tasks',JSON.stringify(tasks));
	loadTasks();
}

function setFilter(event){
	currentFilter = event.target.getAttribute('data-filter');
	loadTasks();
}

document.getElementById('taskForm').addEventListener('submit', addTask);

document.querySelectorAll('#filters button').forEach(button =>{
	button.addEventListener('click', setFilter);
})

window.onload = loadTasks;
