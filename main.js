const showButton = document.querySelector("#showDialog");
const formDialog = document.querySelector("#formDialog");

const gridContainer = document.querySelector(".grid-container");

showButton.addEventListener("click", () => {
  formDialog.showModal();
});

const myLibrary = [];

function Book(title, author, readStatus) {
  this.title = title;
  this.author = author;
  this.readStatus = readStatus;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function resetBookDisplay() {
  gridContainer.innerHTML = "";
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const bookCard = `
    <div class="book-card">
      <p>${book.author}</p>
      <h2>${book.title}</h2>
      <div class="book-status">${book.readStatus}</div>
    </div>
    `;

    gridContainer.appendChild(bookCard);
  }
}

addBookToLibrary(new Book("some title", "some author", "not started"));
console.log(myLibrary);