const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('tasks2create');
const taskList = document.getElementById('list-group-class');

// Add event listener to the Add Task button
addBtn.addEventListener('click', addTask);

//add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.className = 'list-group-item';
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <div class="float-end">
        <button class="btn btn-outline-secondary btn-sm" onclick="editTask(this)">Edit</button>
        <button class="btn btn-outline-danger btn-sm" onclick="deleteTask(this)">Delete</button>
      </div>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

//delete a task
function deleteTask(button) {
  const taskItem = button.closest('li');
  taskList.removeChild(taskItem);
}

//edit a task
function editTask(button) {
  const taskItem = button.closest('li');
  const taskText = taskItem.querySelector('span');
  const editBtn = taskItem.querySelector('.btn-outline-secondary');
  
  // Replace the task text 
  taskText.innerHTML = `<input type="text" class="form-control" value="${taskText.innerText}">`;
  
  // Change the "Edit" button to "Save"
  editBtn.innerText = 'Save';
  editBtn.classList.replace('btn-outline-secondary', 'btn-outline-primary');
  editBtn.setAttribute('onclick', 'saveTask(this)');
}

//save a task after editing
function saveTask(button) {
  const taskItem = button.closest('li');
  const taskText = taskItem.querySelector('span');
  const editBtn = taskItem.querySelector('.btn-outline-primary');
  const newTaskText = taskText.querySelector('input').value.trim();
  
  // Update the task text if it's not empty
  if (newTaskText !== '') {
    taskText.innerText = newTaskText;
  }
  
  // Restore the "Edit" button
  editBtn.innerText = 'Edit';
  editBtn.classList.replace('btn-outline-primary', 'btn-outline-secondary');
  editBtn.setAttribute('onclick', 'editTask(this)');
}
