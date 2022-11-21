const checkComplete = (id) => {
  // recibe un id
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", (event) => completeTask(event, id));
  return i;
};
// Immediately invoked function expression IIFE
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle("far");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");

  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item) => item.id === id); // saber la posicion de la tarea
  tasks[index]["complete"] = !tasks[index]["complete"]; // dentro de tasks sabemos que queremos acceder acierto index, y dentro de esa posiscion queremos acceder a la llave complete | false a true
  localStorage.setItem("tasks", JSON.stringify(tasks)); // despues que se modifico el arreglo en el localStorage ya modificado
};

export default checkComplete;
