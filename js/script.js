console.log("Witam deva!");

let button = document.querySelector(".body__button");
let buttonText = document.querySelector(".js-buttonText");
let table = document.querySelector(".table");

button.addEventListener("click", () => {
  buttonText.innerText =
    buttonText.innerText === "tylko top 4" ? "top 8" : "tylko top 4";
  for (const row of table.querySelectorAll("tr:nth-child(1n + 6)")) {
    row.classList.toggle("table--top8");
  }
});
