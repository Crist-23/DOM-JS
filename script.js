// Este archivo lleva la logica

import { addTask } from "./components/addTask.js";
import { displayTask } from "./components/readTaks.js";

const btn = document.querySelector("[data-form-btn]");

//Arrow functions o funciones anonimas
btn.addEventListener("click", addTask);

displayTask();
