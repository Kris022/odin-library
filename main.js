const bookContainer = document.querySelector(".book-grid");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addToLibrary(book) {
  myLibrary.push(book);
}

function resetBookContianer() {
  bookContainer.innerHTML = "";
}

function displayBooks() {
  resetBookContianer();

  myLibrary.forEach((book) => {
    const bookElement = `
    <div class="book-card">
        <div class="title">12</div>
        <div class="author">Author Here</div>
        <div class="pages">123</div>
    </div>
    `;

    bookContainer.innerHTML += bookElement;
  });
}

addToLibrary(new Book("John Ronald Reuel Tolkien", "The Hobbit", 123, false));

console.log(myLibrary);

displayBooks();
