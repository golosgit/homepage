{
  const welcomeMessage = () => {
    console.log("Witam deva!");
  };

  const hideTableRows = () => {
    const buttonText = document.querySelector(".js-buttonText");
    const table = document.querySelector(".table");

    buttonText.innerText =
      buttonText.innerText === "tylko top 4" ? "top 8" : "tylko top 4";
    for (const row of table.querySelectorAll("tr:nth-child(1n + 6)")) {
      row.classList.toggle("table--top8");
    }
  };

  const init = () => {
    const button = document.querySelector(".body__button");

    welcomeMessage();

    button.addEventListener("click", hideTableRows);
  };

  init();
}
