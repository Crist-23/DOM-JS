(() => {
  const btn = document.querySelector("[data-form-btn]");

  //lee de arriba hacia abajo, tiene orden
  const createTask =
    ("click",
    (event) => {
      event.preventDefault();
      const input = document.querySelector("[data-form-input]");
      const value = input.value;
      const list = document.querySelector("[data-list]");
      const task = document.createElement("li");
      task.classList.add("card");
      input.value = "";
      const taskContent = document.createElement("div");
      const titleTask = document.createElement("span");
      titleTask.classList.add("task");
      titleTask.innerText = value;
      taskContent.appendChild(checkComplete());
      taskContent.appendChild(titleTask);

      const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`; //backticks | Templ. strings decirle que value es una variable de JS
      // task.innerHTML = content;
      // el padre hace la lista y el hijo hace la tarea
      task.appendChild(taskContent);
      list.appendChild(task);
    });

  // Arrow funtions o funciones anonimas
  btn.addEventListener("click", createTask);

  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
  };

  const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("far");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
  };
})();
