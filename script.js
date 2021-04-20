const toDoList = document.getElementsByClassName("to-do-list")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    addItem();
  }
});

function addItem(){
  var divParent = document.createElement("div");
  var divChild = document.createElement("div");
  var checkIcon = document.createElement("i");
  var trashIcon = document.createElement("i");

  divParent.className = "item";
  divParent.innerHTML = '<div> <p>'+input.value+'</p> </div>';

  checkIcon.className = "fas fa-check-square";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", function(){
    checkIcon.style.color = "limegreen";
  })
  divChild.appendChild(checkIcon);

  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", function(){
    divParent.remove();
  })
  divChild.appendChild(trashIcon);

  divParent.appendChild(divChild);

  toDoList.appendChild(divParent);
  input.value = '';
}