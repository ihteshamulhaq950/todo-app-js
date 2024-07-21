document.addEventListener('DOMContentLoaded', () => {

    // body theme
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';

    // Create container
    const container = document.createElement('div');
    container.style.maxWidth = '500px';
    container.style.margin = '50px auto';
    container.style.padding = '20px';
    container.style.border = '1px solid #ddd';
    container.style.borderRadius = '10px';
    container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    container.style.backgroundColor = 'gray';
    container.style.fontFamily = 'Arial, sans-serif';
    console.log(container);
    document.body.appendChild(container);


    // Create title
    const title = document.createElement('h1');
    title.textContent = 'To-Do List';
    title.style.textAlign = 'center';
    container.appendChild(title)


    // Create input and button for adding
    const inputContainer = document.createElement('div');
    inputContainer.style.display = 'flex';
    inputContainer.style.justifyContent = 'space-between';
    inputContainer.style.marginBottom = '20px';
    container.appendChild(inputContainer);

    const input = document.createElement('input');
    input.type = 'text'
    input.placeholder = 'Add a new task';
    input.style.backgroundColor = 'black';
    input.style.color = 'white'
    input.style.flex = '1';
    input.style.padding = '10px';
    input.style.border = '1px solid #ddd';
    input.style.borderRadius = '5px 0 0 5px';
    inputContainer.appendChild(input)

    const addButton = document.createElement('button');
    addButton.textContent = 'Add';
    addButton.style.padding = '10px 20px';
    addButton.style.border = 'none';
    addButton.style.backgroundColor = '#007bff';
    addButton.style.color = '#fff';
    addButton.style.cursor = 'pointer';
    addButton.style.borderRadius = '0 5px 5px 0';
    inputContainer.appendChild(addButton);


    // Create list for tasks
    const taskList = document.createElement('ul');
    taskList.style.listStyleType = 'none';
    taskList.style.padding = '0';
    container.appendChild(taskList);

    // Function to create a task item
    const createTaskItem = (taskText) => {
        const taskItem = document.createElement('li');
        taskItem.style.backgroundColor = 'black';
        taskItem.style.color = 'white';
        taskItem.style.display = 'flex';
        taskItem.style.justifyContent = 'space-between';
        taskItem.style.padding = '10px';
        taskItem.style.border = '1px solid #ddd';
        taskItem.style.borderRadius = '5px';
        taskItem.style.marginBottom = '10px';

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        taskItem.appendChild(taskTextSpan);

        const buttonContainer = document.createElement('div');

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.style.marginRight = '10px';
        completeButton.style.border = 'none';
        completeButton.style.backgroundColor = '#28a745';
        completeButton.style.color = '#fff';
        completeButton.style.cursor = 'pointer';
        completeButton.style.borderRadius = '5px';
        completeButton.addEventListener('click', () => {
            taskTextSpan.style.textDecoration = 'line-through';
            taskTextSpan.style.color = '#888';
        });
        buttonContainer.appendChild(completeButton);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.style.border = 'none';
        removeButton.style.backgroundColor = '#dc3545';
        removeButton.style.color = '#fff';
        removeButton.style.cursor = 'pointer';
        removeButton.style.borderRadius = '5px';
        removeButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        buttonContainer.appendChild(removeButton);

        taskItem.appendChild(buttonContainer);

        return taskItem;
    };

    // Event listener for adding tasks
    addButton.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            const taskItem = createTaskItem(input.value);
            if (taskList.firstChild) {
                taskList.insertBefore(taskItem, taskList.firstChild);
            } else {
                taskList.appendChild(taskItem);
            }
            // taskList.appendChild(taskItem);
            input.value = '';
            input.focus();
        }
    });

    // Allow pressing Enter to add task
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    })
})