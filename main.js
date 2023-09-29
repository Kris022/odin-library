const showButton = document.querySelector("#showDialog");
const formDialog = document.querySelector("#formDialog");
const addBookButton = document.querySelector("#addBook");

const newBookForm = document.querySelector("#newBookForm");

const gridContainer = document.querySelector(".grid-container");

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
  resetBookDisplay();

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const bookCard = `
    <div class="book-card">
      <p>${book.author}</p>
      <h2>${book.title}</h2>
      <div class="book-status">${book.readStatus}</div>
    </div>
    `;

    gridContainer.innerHTML += bookCard;
  }
}

showButton.addEventListener("click", () => {
  formDialog.showModal();
});

addBookButton.addEventListener("click", (event) => {
  event.preventDefault();

  const title = newBookForm.elements["title"].value;
  const author = newBookForm.elements["author"].value;
  const status = newBookForm.elements["status"].value;

  if (title && author) {
    const book = new Book(title, author, status);
    addBookToLibrary(book);
    displayBooks();
    // reset form
    newBookForm.reset();
    // close the form
    formDialog.close();
  }
});

addBookToLibrary(new Book("some title", "some author", "not started"));
displayBooks();
