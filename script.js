/**
 * Question 1: Interactive Sidebar
 */
const question1 = () => {
  const sidebarButton = document.getElementById("sidebar-button");
  const sidebar = document.getElementById("sidebar");

  // Listen for a "click" event on the sidebar's button.
  sidebarButton.addEventListener("click", (event) => {
    const sidebarIsOpen = sidebar.classList.contains("opened");

    if (sidebarIsOpen) {
      // Close the sidebar by removing the "opened" class
      sidebar.classList.remove("opened");
      // Change button text back to "›"
      sidebarButton.textContent = "›";
    } else {
      // Open the sidebar by adding the "opened" class
      sidebar.classList.add("opened");
      // Change button text to "‹"
      sidebarButton.textContent = "‹";
    }
  });
};

/**
 * Question 2: TODO List
 */
const question2 = () => {
  const taskName = document.getElementById("task-name");
  const addTodoButton = document.getElementById("add-todo");
  const todoListUl = document.getElementById("todo-list");

  addTodoButton.addEventListener("click", (event) => {
    const taskValue = taskName.value.trim();

    // Validate that the task name is not empty
    if (taskValue === "") {
      alert("Task name cannot be empty!");
      return;
    }

    // Create a new <li> element for the task
    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = taskValue;

    // Append the new <li> to the todo-list <ul>
    todoListUl.appendChild(newTodoItem);

    // Clear the input field after adding the task
    taskName.value = "";
  });
};

/**
 * Question 3: Greeter
 */
const question3 = () => {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const message = document.getElementById("message");

  // Function to update the greeting message
  const updateMessage = () => {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    message.textContent = `Hello ${firstName} ${lastName}!`;
  };

  // Listen for changes on both first name and last name inputs
  firstNameInput.addEventListener("input", updateMessage);
  lastNameInput.addEventListener("input", updateMessage);
};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
