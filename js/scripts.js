// funcao que adiciona tarefa

function addTask() {
  //titulo tarefa
  const taskTitle = document.querySelector('#task-title').value

  if (taskTitle) {
    //clona template
    const template = document.querySelector('.template')
    const newTask = template.cloneNode(true)

    //adicionar titulo
    newTask.querySelector('.task-title').textContent = taskTitle

    //remover as classes desnecessarias
    newTask.classList.remove('template')
    newTask.classList.remove('hide')

    //adiciona tarefa na lista
    const list = document.querySelector('#task-list')

    list.appendChild(newTask)

    //adicionar o evento de remover
    const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function(e) {
      removeTask(this)
    })

    //adicionar evento de completar
    const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function () {
      completeTask(this)
    })

    //limpar texto

    document.querySelector('#task-title').value = ''
  }
}

//funcao de remover tarefa
function removeTask(task) {
  task.parentNode.remove(true)
}

//funcao adicionar tarefa
function completeTask(task) {
  const taskToComplete = task.parentNode

  taskToComplete.classList.toggle('done')
}

//Evento adicionar tarefa
const addBtn = document.querySelector('#add-btn')

addBtn.addEventListener('click', function(e) {
  e.preventDefault()

  addTask()

})