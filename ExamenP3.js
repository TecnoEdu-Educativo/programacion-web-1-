document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
   
    loadTasks();
    
   
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const taskText = taskInput.value.trim();
        
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            saveTasks();
        }
    });
    
   
    function addTask(taskText) {
        const li = document.createElement('li');
        li.className = 'task-item';
        
        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;
        
        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = 'OK';
        completeBtn.addEventListener('click', function() {
            li.remove();
            saveTasks();
        });
        
        li.appendChild(taskSpan);
        li.appendChild(completeBtn);
        
        taskList.appendChild(li);
    }
    
   
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task-item .task-text').forEach(function(task) {
            tasks.push(task.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            JSON.parse(savedTasks).forEach(function(task) {
                addTask(task);
            });
        }
    }
});