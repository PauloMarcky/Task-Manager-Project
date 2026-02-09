
element_add_btn = document.querySelector("#js-add-button");
element_input_task = document.querySelector("#input-js");
element_display = document.querySelector("#js-display-tasks");
elemet_date = document.querySelector("#date-input-js");

let tasks = [];
let dates = [];

function task_add() {
  const list = element_input_task.value;
  const dates_input = elemet_date.value;
  if (list == "") {
    return;
  }
  dates.push(dates_input)
  tasks.push(list);
  elemet_date.value = "";
  element_input_task.value = "";
}

function task_delete(index) {
  tasks.splice(index, 1);
  dates.splice(index, 1);
  task_display();
}

function task_display() {
  element_display.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    element_display.innerHTML += `
      
      <div>${tasks[i]}</div>
      <div>${dates[i]}</div>
      <button style="background-color: tomato; border: 1px solid rgb(137, 137, 137);     font-weight: bold; height:40px; width: 100px; border-radius:7px;"
          onclick ="task_delete(${i})
        ">DELETE</button>
      `;
  }

}

element_add_btn.onclick = function () {
  task_add();
  task_display();
}
