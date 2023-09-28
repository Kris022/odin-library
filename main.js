const showButton = document.querySelector("#showDialog");
const formDialog = document.querySelector("#formDialog");

showButton.addEventListener("click", () => {
  formDialog.showModal();
});
