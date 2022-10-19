// Oppgave 1
const removeBtn = document.getElementById("remove-btn");
removeBtn.addEventListener("click", () => {
  document.getElementById("remove").remove();
});

// Oppgave 2
const changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", () => {
  document.getElementById("change").innerHTML = "Ruben var her!";
});

// Oppgave 3
let inputValue = document.getElementById("input");
inputValue.addEventListener("input", () => {
  document.getElementById("input-text").innerHTML = inputValue.value;
});

// Oppgave 4
const writeList = document.getElementById("write-list");

writeList.addEventListener("click", () => {
  const myList = ["item one", "item two", "item three"];
  let i;
  for (i = 0; i < myList.length; i++) {
    const ul = document.getElementById("ul");
    const newList = document.createElement("li");
    newList.innerHTML = myList[i];
    ul.appendChild(newList);
  }
});

// Oppgave 5
const create = document.getElementById("create");

create.addEventListener("click", () => {
  const placeholder = document.getElementById("placeholder");
  const tagValue = document.getElementById("select").value;
  const textValue = document.getElementById("text").value;
  const createElement = document.createElement(tagValue);
  createElement.innerHTML = textValue;
  placeholder.appendChild(createElement);
});

// Oppgave 6

const removeli = document.getElementById("remove-li");

removeli.addEventListener("click", () => {
  const li = document.getElementById("list");
  if (li.childNodes.length > 0) {
    li.childNodes[0].remove();
  }
});

// Oppgave 7
const order = document.getElementById("order");
const nameElement = document.getElementById("name");

nameElement.addEventListener("input", (e) => {
  if (e.target.value.length > 4) {
    order.style.borderColor = "red";
  } else {
    order.style.borderColor = "";
  }
});

// Oppgave 8
const color = document.getElementById("color");
color.addEventListener("click", () => {
  const children = document.getElementsByClassName("children")[0];
  let i;
  for (i = 0; i < children.childElementCount; i++) {
    if ((i + 1) % 2 === 0) {
      children.children[i].style.color = "pink";
    } else {
      children.children[i].style.color = "green";
    }
  }
});
