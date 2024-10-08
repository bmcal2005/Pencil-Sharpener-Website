/**
 * Question 1: Interactive Sidebar
 */
const question1 = () => {
  const sidebarButton = document.getElementById("sidebar-button");
  const sidebar = document.getElementById("sidebar");

  sidebarButton.addEventListener("click", (event) => {
    const sidebarIsOpen = sidebar.classList.contains("opened");

    if (sidebarIsOpen) {
      sidebar.classList.remove("opened");
      sidebarButton.textContent = "›";
    } else {
      sidebar.classList.add("opened");
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

    if (taskValue === "") {
      alert("Task name cannot be empty!");
      return;
    }

    const newTodoItem = document.createElement("li");
    newTodoItem.textContent = taskValue;

    todoListUl.appendChild(newTodoItem);

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

  const updateMessage = () => {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    message.textContent = `Hello ${firstName} ${lastName}!`;
  };

  firstNameInput.addEventListener("input", updateMessage);
  lastNameInput.addEventListener("input", updateMessage);
};

document.addEventListener("DOMContentLoaded", (event) => {
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
