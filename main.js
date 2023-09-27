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

function displayBooks() {
    return false;
}

// Get input from the add book form
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleField = document.getElementById("title").value;
  const authorField = document.getElementById("author").value;
  const readField = document.getElementById("read").value;

  addBookToLibrary(new Book(titleField, authorField, readField));
  console.log(myLibrary);

  // Reset the input fields

});
