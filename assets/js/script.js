let taskId = 1;
const alertbox = document.querySelector(".alert-box");
let textAlertbox = alertbox.querySelector(".text-alert");
let textbar = document.querySelector(".risco");

function NewTask() {
  let tasktext = document.getElementById("new-task-text");
  //Pega o texto do input

  let newtext = tasktext.value.trim();
  //remove os espaços a esquerda e a direita do frase/palavra

  let boxcontent = document.getElementById("box-content-task");
  let tarefasExistentes = boxcontent.getElementsByTagName("li");
  
  let captalizeText = function capitalizeFirstLetter(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);

  };

  //Captaliza o texto para que a primeira letra fique em caixa alta
  newtext = captalizeText(newtext);

if (newtext === "") {
  textAlertbox.innerHTML = "A Task não pode ser vazia!";
  alertbox.style.display = 'flex';
  RemoveTask(newtext);
  HideAlert();
};

//Verificar se o input esta vazio

for (let j = 0; j < tarefasExistentes.length; j++) {
  let tarefaExistenteTexto = tarefasExistentes[j].textContent.trim();

  if (newtext === tarefaExistenteTexto) {

    textAlertbox.innerHTML = "Essa Task ja existe na lista!";
    alertbox.style.display = 'flex';

    HideAlert();
    tasktext.value = "";
  }
};

//Verificar se o input ja existe

let liElement = document.createElement("li");
liElement.id = `task-${taskId}`;
liElement.className = "risco";
liElement.innerHTML =
   `<button class="btn-task"onclick="Taskcompt(this.parentNode)">
    <i class="bi bi-check-circle-fill"></i>

    </button> <p class="risco">${newtext}</p> 

    <button class="btn-Trash" onclick="RemoveTask(this.parentNode)">
    <i class="bi bi-trash-fill"></i>
    </button>`;

for(let i = 1; i < tarefasExistentes.length; i++ ){
  let boxhg = (70 * (i + 1)) + "px"; 
  // Calcula a altura baseada no índice
  boxcontent.style.Height = boxhg;
  console.log(boxcontent.style.maxHeight);
}          
//Adicionar uma nova task                           

  boxcontent.appendChild(liElement);

  tasktext.value = "";
  taskId++;
};

document.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
  NewTask();
}
})

  function RemoveTask(taskElement) {
  const elementoPai = taskElement
  elementoPai.classList.add("removed-task");

  textAlertbox.innerHTML = "Task foi removida com sucesso!";
  alertbox.style.display = 'flex';

  HideAlert();

  setTimeout(() => {
    elementoPai.remove();
  }, 1300);
  }

  function Taskcompt(liElement) {
    const paragraphElement = liElement.querySelector('p');
    if (paragraphElement.classList.contains("show")) {

      paragraphElement.classList.remove("show");
      paragraphElement.classList.add("remove-bar");

    } else {
      paragraphElement.classList.add("show");
      paragraphElement.classList.remove("remove-bar");
    }
  };

  function HideAlert(){
    setTimeout(function() {
    alertbox.style.display = 'none';
  }, 2600); 
};
