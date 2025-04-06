import { saveTasks } from "./storage.js";

// // dom.js
// export function renderTasks(tasks, container) {
//   container.innerHTML = "";
//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     li.textContent = task.title;
//     container.appendChild(li);
//   });
// }

export function renderTasks(tasks, list) {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.title;

    // Container untuk tombol-tombol
    const btnContainer = document.createElement("div");

    // Tombol Edit
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () => {
      const newTask = prompt("Edit task:", task.title);
      if (newTask) {
        tasks[index].title = newTask;
        saveTasks(tasks);
        // Re-render the tasks after editing
        renderTasks(tasks, list);
      }
    });

    // Tombol Delete
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks(tasks);
      renderTasks(tasks, list);
    });

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(btnContainer);
    list.appendChild(li);
  });
}
