import { uniqueDates, orderDates } from "../services/date.js";
import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";

export const displayTask = () => {
  // generamos nuestra funcion, este muestra nuevas tareas, si se completo la tarea o se elimino
  const list = document.querySelector("[data-list]"); // seleccionar la lista la cual queremos agregar las tareas que queremos tener almacenadas
  // console.log(list); // ul.cardList

  const taksList = JSON.parse(localStorage.getItem("tasks")) || []; // pipe; encaso que venga nulo va a tener por defecto el valor de arreglo vacio
  // tomamos la info que esta almcaenada en nuestro local Storage
  const dates = uniqueDates(taksList);

  orderDates(dates);

  dates.forEach((date) => {
    const dateMoment = moment(date, "DD,MM,YYYY");
    list.appendChild(dateElement(date));

    taksList.forEach((task) => {
      const taskDate = moment(task.dateFormat, "DD,MM,YYYY");
      const diff = dateMoment.diff(taskDate);
      if (diff === 0) {
        list.appendChild(createTask(task)); // mandamos ese formato o esa tarea que tiene formato de objeto, que tiene la llave value, como dateFormat, y lo mandamos a la function createTask que manda toda estructura html con todo ya definido, y lo ultimo es agregarlo a la lista
      }
      // list.appendChild(dateElement(task.dateFormat)); recorremos este arreglo, el primer parametro del arrowfunc la tarea que existe o elemento que existen el arreglo
    }); // por cada uno de los elementos que existen dentro de nuestros arreglos dates, vas a ir al arreglo tasksList y vas a ir a cada uno de ellos generando la estructura
  });
};
