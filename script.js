document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-tasks');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskName = document.getElementById('task-name').value;
        const taskDescription = document.getElementById('task-description').value;

        addTask(taskName, taskDescription);
        form.reset();
        successMessage.style.display = 'block';
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 2000); // Hide the success message after 2 seconds
    });

    function addTask(name, description) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const span = document.createElement('span');
        const timer = document.createElement('div');
        const playButton = document.createElement('button');
        const pauseButton = document.createElement('button');
        const stopButton = document.createElement('button');
        const currentDate = new Date().toLocaleDateString();

        checkbox.type = 'checkbox';
        span.textContent = name + ': ' + description;
        timer.textContent = 'Created on: ' + currentDate;
        playButton.textContent = '▶ Play';
        pauseButton.textContent = '⏸ Pause';
        stopButton.textContent = '⏹ Stop';

        li.classList.add('task');
        timer.classList.add('timer');

        playButton.addEventListener('click', function() {
            // Code for starting the timer
        });

        pauseButton.addEventListener('click', function() {
            // Code for pausing the timer
        });

        stopButton.addEventListener('click', function() {
            // Code for stopping the timer
        });

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                li.classList.add('completed-task');
                completedTaskList.appendChild(li);
                li.removeChild(timer);
            } else {
                li.classList.remove('completed-task');
                taskList.appendChild(li);
                li.appendChild(timer);
            }
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(timer);
        li.appendChild(playButton);
        li.appendChild(pauseButton);
        li.appendChild(stopButton);

        taskList.appendChild(li);
    }
});
