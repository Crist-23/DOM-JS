import { addTask } from "./components/addTask.js";
import { displayTask } from "./components/readTaks.js";

const btn = document.querySelector("[data-form-btn]");

btn.addEventListener("click", addTask);

displayTask();
