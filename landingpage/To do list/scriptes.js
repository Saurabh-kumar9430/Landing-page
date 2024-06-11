document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const taskInput = document.getElementById('task-input').value;
        const dueDate = document.getElementById('due-date').value;
        const category = document.getElementById('category').value;
        const priority = document.getElementById('priority').value;

        addTask(taskInput, dueDate, category, priority);
        taskForm.reset();
    });

    function addTask(task, dueDate, category, priority) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>
                ${task} (Due: ${dueDate}, Category: ${category}, Priority: ${priority})
            </span>
            <span>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </span>
        `;

        taskList.appendChild(li);

        li.querySelector('.complete').addEventListener('click', function() {
            li.classList.toggle('complete');
        });

        li.querySelector('.delete').addEventListener('click', function() {
            taskList.removeChild(li);
        });
    }
});
