document.addEventListener('DOMContentLoaded', () => {
    // Charger les tâches à partir du localStorage ou utiliser un tableau vide si aucune n'existe
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Sélection des éléments du DOM
    const form = document.getElementById('todoForm');
    const input = document.getElementById('todoInput');
    const list = document.getElementById('todoList');
    const clearAllBtn = document.getElementById('clearAll');
    const totalTasks = document.getElementById('totalTasks');
    const activeTasks = document.getElementById('activeTasks');
    const completedTasks = document.getElementById('completedTasks');

    // Mise à jour des statistiques affichées sur la page
    const stats = {
        total: todos.length,
        active: todos.filter(todo => !todo.completed).length,
        completed: todos.filter(todo => todo.completed).length
    };
    totalTasks.textContent = stats.total;
    activeTasks.textContent = stats.active;
    completedTasks.textContent = stats.completed;
    clearAllBtn.style.display = stats.total > 0 ? 'block' : 'none';

    // Affichage initial des tâches
    list.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="todo-text">${todo.text}</span>
            <button class="delete-btn">Supprimer</button>
        `;

        // Gestion de la modification de l'état de complétion
        li.querySelector('.todo-checkbox').addEventListener('change', () => {
            todo.completed = !todo.completed;
            localStorage.setItem('todos', JSON.stringify(todos));
            li.classList.toggle('completed');

            stats.total = todos.length;
            stats.active = todos.filter(todo => !todo.completed).length;
            stats.completed = todos.filter(todo => todo.completed).length;
            totalTasks.textContent = stats.total;
            activeTasks.textContent = stats.active;
            completedTasks.textContent = stats.completed;
            clearAllBtn.style.display = stats.total > 0 ? 'block' : 'none';
        });

        // Gestion de la suppression d'une tâche
        li.querySelector('.delete-btn').addEventListener('click', () => {
            const index = todos.indexOf(todo);
            if (index > -1) {
                todos.splice(index, 1);
                localStorage.setItem('todos', JSON.stringify(todos));
                li.remove();

                stats.total = todos.length;
                stats.active = todos.filter(todo => !todo.completed).length;
                stats.completed = todos.filter(todo => todo.completed).length;
                totalTasks.textContent = stats.total;
                activeTasks.textContent = stats.active;
                completedTasks.textContent = stats.completed;
                clearAllBtn.style.display = stats.total > 0 ? 'block' : 'none';
            }
        });

        list.appendChild(li);
    });

    // Gestion de la soumission du formulaire pour ajouter une nouvelle tâche
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (text) {
            const todo = {
                id: Date.now().toString(),
                text: text,
                completed: false
            };
            todos.unshift(todo);
            localStorage.setItem('todos', JSON.stringify(todos));

            const li = document.createElement('li');
            li.className = `todo-item`;
            li.innerHTML = `
                <input type="checkbox" class="todo-checkbox">
                <span class="todo-text">${todo.text}</span>
                <button class="delete-btn">×</button>
            `;

            li.querySelector('.todo-checkbox').addEventListener('change', () => {
                todo.completed = !todo.completed;
                localStorage.setItem('todos', JSON.stringify(todos));
                li.classList.toggle('completed');

                stats.total = todos.length;
                stats.active = todos.filter(todo => !todo.completed).length;
                stats.completed = todos.filter(todo => todo.completed).length;
                totalTasks.textContent = stats.total;
                activeTasks.textContent = stats.active;
                completedTasks.textContent = stats.completed;
                clearAllBtn.style.display = stats.total > 0 ? 'block' : 'none';
            });

            li.querySelector('.delete-btn').addEventListener('click', () => {
                const index = todos.indexOf(todo);
                if (index > -1) {
                    todos.splice(index, 1);
                    localStorage.setItem('todos', JSON.stringify(todos));
                    li.remove();

                    stats.total = todos.length;
                    stats.active = todos.filter(todo => !todo.completed).length;
                    stats.completed = todos.filter(todo => todo.completed).length;
                    totalTasks.textContent = stats.total;
                    activeTasks.textContent = stats.active;
                    completedTasks.textContent = stats.completed;
                    clearAllBtn.style.display = stats.total > 0 ? 'block' : 'none';
                }
            });

            list.insertBefore(li, list.firstChild);
            input.value = '';

            stats.total = todos.length;
            stats.active = todos.filter(todo => !todo.completed).length;
            stats.completed = todos.filter(todo => todo.completed).length;
            totalTasks.textContent = stats.total;
            activeTasks.textContent = stats.active;
            completedTasks.textContent = stats.completed;
            clearAllBtn.style.display = stats.total > 0 ? 'block' : 'none';
        }
    });

    // Gestion de la suppression de toutes les tâches
    clearAllBtn.addEventListener('click', () => {
        todos.length = 0;
        localStorage.setItem('todos', JSON.stringify(todos));
        list.innerHTML = '';

        stats.total = todos.length;
        stats.active = todos.filter(todo => !todo.completed).length;
        stats.completed = todos.filter(todo => todo.completed).length;
        totalTasks.textContent = stats.total;
        activeTasks.textContent = stats.active;
        completedTasks.textContent = stats.completed;
        clearAllBtn.style.display = stats.total > 0 ? 'block' : 'none';
    });
});
