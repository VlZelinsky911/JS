class Task {
	constructor(description, status = "pending", priority = 1) {
		this.id = Date.now();
		this.description = description;
		this.status = status;
		this.priority = priority;
	}
}	
class TaskManeger {
	constructor() {
		this.tasks = [];
		this.loadTasks();
		this.renderTasks();
	}

	addTasks(description, status = "pending", priority = 1){
		const task = new Task(description, status, priority);
		this.tasks.push(task);
		this.saveTasks();
		this.renderTasks();
	}

	deleteTask(id){
		this.tasks = this.tasks.filter(task => task.id !== id);
		this.saveTasks();
		this.renderTasks();
	}
	sortTaskByPriority(){
		this.tasks.sort((a, b) => b.priority - a.priority);
		this.renderTasks()
	}

	saveTasks(){
		localStorage.setItem("tasks", JSON.stringify(this.tasks));
	}

	loadTasks(){
	const tasksFromStorage = localStorage.getItem("tasks");
	if(tasksFromStorage){
		this.tasks = JSON.parse(tasksFromStorage);
		}
	}

	renderTasks(){
	const taskList = document.getElementById("taskList");
	taskList.innerHTML = "";

	if(this.tasks.length === 0){
		taskList.innerHTML = "<p>Список завдань порожній.</p>"
		return;
	}

	this.tasks.forEach(task => {
	const taskDiv	= document.createElement("div");
	taskDiv.className = `task ${this.getPriorityClass(task.priority)}`;
	taskDiv.innerHTML = `
			<p>Пріоритет: ${this.getPriorityText(task.priority)}</p>
			<p><strong>${task.description}</strong></p>
			<div class="buttons">
					<button onclick="taskManager.deleteTask(${task.id})">Видалити</button>
			</div>
	`;
	taskList.appendChild(taskDiv);
	});
}
	getPriorityText(priority){
		return priority === 3 ? "Високий" :	priority === 2 ? "Середній" : "Низький";
	}

	getPriorityClass(priority){
		return priority === 3 ? "high" :	priority === 2 ? "medium" : "low";
	}
}

const taskManager = new TaskManeger();

document.getElementById("addTaskButton").addEventListener("click", () => {
	const description = document.getElementById("taskDescription").value.trim();
	const priority = parseInt(document.getElementById("taskPriority").value, 10);

	if(description){
		taskManager.addTasks(description, "pending",priority);
		document.getElementById("taskDescription").value = "";
	}else{
		alert("Введіть опис завдання!");
	}
});

document.getElementById("sortTasksButton").addEventListener("click", ()=> {
	taskManager.sortTaskByPriority();
})