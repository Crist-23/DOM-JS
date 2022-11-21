import { displayTask } from "./readTaks.js";

const deleteBtn = (id) => {
  //recibimos el id
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  i.addEventListener("click", () => deleteTask(id)); // se modifico de nuevo

  return i; // para llamar la funcion
};
const deleteTask = (id) => {
  //recibimos el id para eleminar el codigo que se tenia antes, en el cual recibimaos el evento
  const list = document.querySelector("[data-list]");
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item) => item.id === id);
  tasks.splice(index, 1);
  list.innerHTML = "";
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTask();
};

export default deleteBtn;
