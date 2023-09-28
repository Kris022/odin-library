const myLibrary = [];

function Book(title, author, read = false) {
  this.title = title;
  this.author = author;
  this.read = read;
}

//
function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

const libraryDisplayElement = document.querySelector(".book-grid-wrapper");

function displayBooks() {
  libraryDisplayElement.innerHTML = "";

  // Find book thats not
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const div = document.createElement("div");
    div.classList.add("book-card");
    const h1 = document.createElement("h3");
    h1.textContent = book.title;
    const h3 = document.createElement("h4");
    h3.textContent = book.author;
    const h6 = document.createElement("h6");
    h6.textContent = book.read ? "Read" : "Not Read";

    div.appendChild(h1);
    div.appendChild(h3);
    div.appendChild(h6);

    libraryDisplayElement.appendChild(div);
  }
}

// Get input from the add book form
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleField = document.getElementById("title").value;
  const authorField = document.getElementById("author").value;
  const readField = document.getElementById("read").checked;

  addBookToLibrary(new Book(titleField, authorField, readField));
  console.log(myLibrary);

  // Reset the input fields
  displayBooks();
  form.reset();
});

addBookToLibrary(new Book("book title", "book author", false));
displayBooks();