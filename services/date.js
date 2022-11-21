export const uniqueDates = (tasks) => {
  const unique = [];

  tasks.forEach((task) => {
    if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat);
    //si no existe task.dateFormat dentro de nuestro arreglo lo agregas
  });

  return unique; // regresa nuestro arreglo
};

export const orderDates = (dates) => {
  return dates.sort((a, b) => {
    const firstDate = moment(a, "DD/MM/YYYY");
    const SecondDate = moment(b, "DD/MM/YYYY");
    return firstDate - SecondDate;
  });
};
