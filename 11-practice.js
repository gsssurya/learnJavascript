let todoArray = JSON.parse(localStorage.getItem("todo-array")) || [];
        renderTodoList();
        function renderTodoList(){
            let todoListHTML = '';
            for(let i = 0; i < todoArray.length; i++){
                const todoObject = todoArray[i];
                const {
                    name,
                    dueDate} = todoObject;
                const HTML = `
                <p class = "name-todo">
                    ${name}
                </p>
                <p class = "name-todo">
                    ${dueDate}
                </p>
                <button class="delete-button action" onclick= "
                    todoArray.splice(${i}, 1);
                    renderTodoList();
                ">Delete</button>
               `
                todoListHTML += HTML;
            }
            localStorage.setItem('todo-array', JSON.stringify(todoArray))
            document.querySelector('.js-todo-list-container').innerHTML = todoListHTML;
        }
        function addToArray(){
            const todoNameElement = document.querySelector('.todo-name');
            const dueDateElement = document.querySelector(".js-due-date");
            if(todoNameElement.value && dueDateElement.value ){
                const dueDate = dueDateElement.value;
                const name = todoNameElement.value; 
                todoArray.push({
                    name,
                    dueDate});
                document.querySelector('.todo-name').value = '';
                document.querySelector('.js-due-date').value = '';
                document.querySelector('.js-for-confirm').innerHTML = "";
                renderTodoList();
            } else {
                document.querySelector('.js-for-confirm').innerHTML = "Belum lengkap";
                setTimeout(function(){
                     document.querySelector('.js-for-confirm').innerHTML = " ";
                }, 1000);
            }
        }
      
        
        function addToArrayByEnter(event){
            if(event.key === 'Enter'){
                addToArray();
            }
        }
        