import { uniqueDates, orderDates } from "../services/date.js";
import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";

export const displayTask = () => {
 
  const list = document.querySelector("[data-list]"); 
 
  const taksList = JSON.parse(localStorage.getItem("tasks")) || []; 
  const dates = uniqueDates(taksList);

  orderDates(dates);

  dates.forEach((date) => {
    const dateMoment = moment(date, "DD,MM,YYYY");
    list.appendChild(dateElement(date));

    taksList.forEach((task) => {
      const taskDate = moment(task.dateFormat, "DD,MM,YYYY");
      const diff = dateMoment.diff(taskDate);
      if (diff === 0) {
        list.appendChild(createTask(task)); 
      }
    });
  });
};
