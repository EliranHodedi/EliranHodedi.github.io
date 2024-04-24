document.addEventListener('DOMContentLoaded', function() {
    console.log("Document loaded");

    const form = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log("Form submitted");

        const taskName = document.getElementById('task-name').value;
        const taskDescription = document.getElementById('task-description').value;
        console.log("Task Name:", taskName);
        console.log("Task Description:", taskDescription);

        addTask(taskName, taskDescription);
        form.reset();
        successMessage.style.display = 'block';
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 2000); // Hide the success message after 2 seconds
    });

    function addTask(name, description) {
        console.log("Adding task:", name, description);
        const li = document.createElement('li');
        const span = document.createElement('span');

        span.textContent = name + ': ' + description;
        li.appendChild(span);
        taskList.appendChild(li);
    }
});
