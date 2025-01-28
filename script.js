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

    const taskList = document.getElementById("task-list-body");
    const taskItem = document.createElement("tr");
    taskItem.innerHTML = `
        <th>${title}</th>
        <td>${description}</td>
        <td>${task}</td>
        <td><button onclick="deleteTask(${tasks.length - 1})">Delete</button><button onclick="editTask(${tasks.length - 1})">Edit</button></td>
        `;
    taskList.appendChild(taskItem);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("task").value = "";
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        const taskList = document.getElementById("task-list-body");
        // taskList.removeChild(taskList.children[index]);
        const taskToRemove = taskList.children[index];  
        if (taskToRemove) {  // Make sure the task exists
            taskList.removeChild(taskToRemove);  
        }  
    }

        function editTask(index) {
            const taskObject = tasks[index];
            document.getElementById("title").value = taskObject.title;
            document.getElementById("description").value = taskObject.description;
            document.getElementById("task").value = taskObject.task;
            deleteTask(index);
        }



// above my writen code

// const tasks = new Array();  

// function addTask() {  
//     const title = document.getElementById("title").value;  
//     const description = document.getElementById("description").value;  
//     const task = document.getElementById("task").value;  

//     const taskObject = {  
//         title: title,  
//         description: description,  
//         task: task  
//     };  

//     // Add task to the array  
//     tasks.push(taskObject);  

//     // Add to display  
//     renderTask(taskObject, tasks.length - 1); // Pass the index for later use  

//     // Clear input fields  
//     document.getElementById("title").value = "";  
//     document.getElementById("description").value = "";  
//     document.getElementById("task").value = "";  
// }  

// function renderTask(taskObject, index) {  
//     const taskList = document.getElementById("task-list");  
//     // const taskItem = document.createElement("tr");  

//     taskList.innerHTML = `  
//     <tr>
//         <th>${taskObject.title}</th>  
//         <td>${taskObject.description}</td>  
//         <td>${taskObject.task}</td>  
//         <td>  
//             <button onclick="deleteTask(${index})">Delete</button>  
//             <button onclick="editTask(${index})">Edit</button>  
//         </td>
//     </tr>  
//     `;  

//     taskList.appendChild(taskItem);  
// }  

// function deleteTask(index) {  
//     tasks.splice(index, 1); // Remove task from the array  
//     renderAllTasks(); // Refresh the list display  
// }  

// function editTask(index) {  
//     const taskObject = tasks[index];  

//     // Populate input fields for editing  
//     document.getElementById("title").value = taskObject.title;  
//     document.getElementById("description").value = taskObject.description;  
//     document.getElementById("task").value = taskObject.task;  

//     deleteTask(index); // Remove the task so it can be replaced after editing  
// }  

// // Function to render all tasks -- useful for re-rendering the task list  
// function renderAllTasks() {  
//     const taskList = document.getElementById("task-list");  
//     taskList.innerHTML = ""; // Clear the current list  
//     tasks.forEach((taskObject, index) => {  
//         renderTask(taskObject, index);  
//     });  
// }