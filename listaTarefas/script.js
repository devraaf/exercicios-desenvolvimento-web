const container = document.querySelector("#container");
const lista = document.querySelector("#listaTarefas");

function addTarefa(){
    const input = document.querySelector("input");
    const texto = input.value.trim();
    const btnConcluido = document.createElement("button");
        btnConcluido.classList.add("btnConcluido");
        btnConcluido.onclick = function(){
            marcaConcluido(this);
        };
    if(texto == ""){
        alert("Digite uma tarefa para adicionar à lista!")
    } else{
        const item = document.createElement("li");
        item.classList.add("tarefa");
        item.appendChild(btnConcluido);
        item.appendChild(document.createTextNode(texto));
        lista.appendChild(item);
        input.value="";
    }
}
function limpar(){
    lista.innerHTML="";
}
function marcaConcluido(btn){
   const tarefa = btn.parentElement;
   tarefa.classList.toggle("concluida");
}


