const inputField = document.getElementById("tasks2create"); 
const addButton = document.getElementById("add-btn");
const listGroup = document.getElementById("list-group-class");

// Add event listeners to the button and list group
addButton.addEventListener("click", addTask);
listGroup.addEventListener("click", deleteTask);

function addTask() {
// Get the value from the input field
const task = inputField.value;
 if (task !== "") {
  // Create a new list item
      const listItem = document.createElement("li");
      listItem.className = "list-group-item";
      listItem.textContent = task;

      // Create a delete button
      const deleteButton = document.createElement("button");
      deleteButton.className = "btn btn-outline-danger btn-sm float-end";
      deleteButton.textContent = "Delete";

      // Append the delete button to the list item
      listItem.appendChild(deleteButton);

      // Append the list item to the list group
      listGroup.appendChild(listItem);

      // Clear the input field
      inputField.value = "";
    }
  }

  function deleteTask(event) {
    if (event.target.tagName === "BUTTON") {
      // Remove the parent list item when the delete button is clicked
      const listItem = event.target.parentNode;
      listGroup.removeChild(listItem);
    }
  }
