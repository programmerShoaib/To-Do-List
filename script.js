const tasks = new Array();

function addTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const task = document.getElementById("task").value;

    const taskObject = {
        title: title,
        description: description,
        task: task
    };
    tasks.push(taskObject);

    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p>${task}</p>
    `;
    taskList.appendChild(taskItem);
    }