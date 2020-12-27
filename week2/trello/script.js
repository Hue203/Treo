document.getElementById('add-task').addEventListener('click', function () {
	var taskInput = document.getElementById('task-value');
	addTask(taskInput.value);
	taskInput.value = '';
});

document.getElementById('task-value').addEventListener('keydown', function (e) {
	if (e.key === 'Enter') {
		let taskValue = e.target;
		addTask(taskValue.value);
		taskValue.value = '';
	}
});

function addTask(taskValue) {
	if (!taskValue) return;
	var task = document.createElement('li');
	task.classList.add('task');
	task.classList.add('fill');
	task.setAttribute('draggable', 'true');
	task.addEventListener('dragstart', dragStart);
	task.addEventListener('dragend', dragEnd);

	var taskContent = document.createElement('div');
	taskContent.classList.add('task-content');
	taskContent.innerText = taskValue;

	var trash = document.createElement('div');
	trash.classList.add('trash');
	trash.innerHTML = `<i class="far fa-trash-alt"></i>`;
	trash.addEventListener('click', removeTask);

	var edit = document.createElement('div');
	edit.classList.add('edit');
	edit.innerHTML = `<i class="far fa-edit"></i>`;
	edit.addEventListener('click', editTask);

	// buttons to move the task to a specific column
	var moveButtons = document.createElement('div');
	moveButtons.classList.add('button-group');
	var backlogButton = document.createElement('button');
	backlogButton.innerHTML = '1';
	backlogButton.addEventListener('click', moveTaskTo1);
	var inProgressButton = document.createElement('button');
	inProgressButton.innerHTML = '2';
	inProgressButton.addEventListener('click', moveTaskTo2);
	var reviewButton = document.createElement('button');
	reviewButton.innerHTML = '3';
	reviewButton.addEventListener('click', moveTaskTo3);
	var doneButton = document.createElement('button');
	doneButton.innerHTML = '4';
	doneButton.addEventListener('click', moveTaskTo4);
	moveButtons.appendChild(backlogButton);
	moveButtons.appendChild(inProgressButton);
	moveButtons.appendChild(reviewButton);
	moveButtons.appendChild(doneButton);

	task.appendChild(taskContent);
	task.appendChild(trash);
	task.appendChild(edit);
	task.appendChild(moveButtons);

	var tasks = document.getElementById('tasks-added');
	tasks.insertBefore(task, tasks.childNodes[0]);
}

function removeTask(event) {
	// event represents the remove button
	// Access the <ul> list by moving 2 levels up
	var tasks = event.target.parentNode.parentNode.parentNode;
	// Access the <li> element which is the direct parent
	var task = event.target.parentNode.parentNode;
	console.log(task);
	tasks.removeChild(task);
}

function editTask(event) {
	var contentElement = event.target.parentNode.parentNode.childNodes[0];
	var oldValue = contentElement.innerHTML;
	contentElement.innerHTML = '';
	var inputElement = document.createElement('input');
	inputElement.value = oldValue;
	inputElement.addEventListener('keydown', function (e) {
		if (e.key === 'Enter') {
			var newValue = e.target.value;
			contentElement.innerHTML = newValue;
		}
	});
	contentElement.appendChild(inputElement);
}

function moveTaskTo1(event) {
	var tasks = event.target.parentNode.parentNode.parentNode;
	var task = event.target.parentNode.parentNode;
	tasks.removeChild(task);
	var column1 = document.getElementById('tasks-added');
	column1.append(task);
	console.log(task);
}
function moveTaskTo2(event) {
	var tasks = event.target.parentNode.parentNode.parentNode;
	var task = event.target.parentNode.parentNode;
	tasks.removeChild(task);
	var column2 = document.getElementById('tasks-progress');
	column2.append(task);
	console.log(task);
}
function moveTaskTo3(event) {
	var tasks = event.target.parentNode.parentNode.parentNode;
	var task = event.target.parentNode.parentNode;
	tasks.removeChild(task);
	var column3 = document.getElementById('tasks-review');
	column3.append(task);
	console.log(task);
}
function moveTaskTo4(event) {
	var tasks = event.target.parentNode.parentNode.parentNode;
	var task = event.target.parentNode.parentNode;
	tasks.removeChild(task);
	var column4 = document.getElementById('tasks-done');
	column4.append(task);
	console.log(task);
}
// DRAG & DROP

// A global variable to store the selected task
var task;

function dragStart(event) {
	event.target.classList.add('hold');
	task = event.target;
	setTimeout(function () {
		event.target.classList.add('invisible');
	}, 0);
}

function dragEnd(event) {
	event.target.classList.remove('invisible');
}

function dragEnter(event) {
	if (event.target.classList.contains('dropzone')) {
		event.target.classList.add('hovered');
	}
}

function dragOver(event) {
	event.preventDefault(); // https://stackoverflow.com/a/35428657
}

function dragLeave(event) {
	event.target.classList.remove('hovered');
}

function dragDrop(event) {
	event.target.classList.remove('hovered');
	// event represents the column
	// Add the task to the right child. Inspect the element to find the ul is index 3 in childnodes.
	event.target.childNodes[3].append(task);
}

var dropzones = document.getElementsByClassName('dropzone');

for (var index = 0; index < dropzones.length; index++) {
	const dropzone = dropzones[index];
	dropzone.addEventListener('dragenter', dragEnter);
	dropzone.addEventListener('dragover', dragOver);
	dropzone.addEventListener('dragleave', dragLeave);
	dropzone.addEventListener('drop', dragDrop);
}
