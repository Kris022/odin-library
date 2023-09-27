const myLibrary = [];

function Book(title, author, read = false) {
  this.title = title;
  this.author = author;
  this.read = read;
}

//
function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  return 0;
}

// Get input from the add book form
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleField = document.getElementById("title");
  const authorField = document.getElementById("author");
  const readField = document.getElementById("read");

  console.log("works");
});
