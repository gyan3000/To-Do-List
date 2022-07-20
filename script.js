
window.addEventListener('load', () => {
    const form = document.getElementById("task-form");
    const input = document.getElementById("task-input");
    const list_el = document.getElementById("tasks");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const task = input.value;

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_btn_el = document.createElement('div');
        task_btn_el.classList.add('btn');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('remove');
        task_delete_el.innerText = 'Remove';

        task_btn_el.appendChild(task_edit_el);
        task_btn_el.appendChild(task_delete_el);

        task_el.appendChild(task_btn_el);

        list_el.appendChild(task_el);

        input.value = '';

        task_edit_el.addEventListener('click', function() {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            }
            else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        task_delete_el.addEventListener('click', function() {
            list_el.removeChild(task_el);
        });
    });
});