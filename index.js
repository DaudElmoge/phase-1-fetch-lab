function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // Fetch data from API
    .then((response) => response.json()) // Convert response to JSON
    .then((books) => renderBooks(books)) // Pass JSON data to renderBooks
    .catch((error) => console.error("Error fetching books:", error)); // Handle errors
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list"); // Find the book list container
  books.forEach((book) => {
    const li = document.createElement("li"); // Create list item
    li.textContent = book.name; // Set book name as text
    bookList.appendChild(li); // Append to list
  });
}

// Call fetchBooks when the page loads
document.addEventListener("DOMContentLoaded", fetchBooks);

fetchBooks().then((books) => console.log("5th book:", books[4].name));


fetch("https://anapioficeandfire.com/api/characters/1031")
  .then((resp) => resp.json())
  .then((character) => console.log("1031st Character:", character.name));


  fetchBooks().then((books) => {
    const totalPages = books.reduce((sum, book) => sum + book.numberOfPages, 0);
    console.log("Total pages:", totalPages);
  });
