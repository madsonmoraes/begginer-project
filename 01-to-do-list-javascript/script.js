const input = document.getElementById("toDoList");
const addButton = document.getElementById("inputBtn");
const taskList = document.querySelector(".task-item ul");

const addTask = () => {
  //verificando o input
  const inputValue = input.value.trim(); //váriavel para pegar o value do input e o .trim() verifica se têm espaços e remove.
  if (!inputValue) return alert("Digite uma tarefa!!!"); // Verifica se o input está vazio, se tiver vazio deve me retornar um alert dizendo que o input está vazio

  //criando nossa li
  const li = document.createElement("li"); //No nosso documento HTML, cria um elemento chamado "li"
  li.innerHTML = `${inputValue} <button class="delete-btn">🗑</button></li>`; //Modifica nosso elemento "li" pelo texto digitado no input, e coloca um button para deletar

  //selecionando e editando nossa li e button
  li.querySelector(".delete-btn").addEventListener("click", () => li.remove()); // Seleciona a classe do button dentro do meu li.innerHTML e logo em seguida criamos um evento de click com uma função de remover que já vem pronta do JS.
  taskList.appendChild(li); //O meu elemento "li", precisa de um elemento pai "appendChild" para ser criado de forma com que respeite minha hierarquia do HTML e do JS, ou seja, meu li irá ficar dentro da minha ul

  //Após feito tudo isso, devemos deixar o input limpo, para o usuário não enfrentar problemas de experiências.
  input.value = "";
};

addButton.addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
  e.key === "Enter" && addTask();
});
