// dom.js
export function renderTasks(tasks, container) {
  container.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.title;
    container.appendChild(li);
  });
}
