class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }

  getDetails() {
    return `${this.title} by ${this.author}, published in ${this.year}, Genre: ${this.genre}`;
  }
}

class Library {
  constructor() {
    const storedBooks = JSON.parse(localStorage.getItem('libraryBooks')) || [];
    this.books = storedBooks.map(
      bookData =>
        new Book(bookData.title, bookData.author, bookData.year, bookData.genre)
    );
    this.displayBooks();
  }

  addBook(book) {
    this.books.push(book);
    this.saveToLocalStorage();
    this.displayBooks();
  }

  displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    if (this.books.length === 0) {
      bookList.innerHTML = '<li>No books in the library.</li>';
      return;
    }

    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${book.getDetails()}`;
      bookList.appendChild(li);
    });
  }

  searchBook(searchTerm) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
    const foundBooks = this.books.filter(
      book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundBooks.length === 0) {
      searchResults.innerHTML = `<li>No books found for the search term: "${searchTerm}".</li>`;
    } else {
      foundBooks.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${book.getDetails()}`;
        searchResults.appendChild(li);
      });
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('libraryBooks', JSON.stringify(this.books));
  }
}

// Initialize Library
const library = new Library();

// Handle form submission for adding a book
document.getElementById('bookForm').addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const year = document.getElementById('year').value;
  const genre = document.getElementById('genre').value;

  const newBook = new Book(title, author, year, genre);
  library.addBook(newBook);

  // Clear form inputs
  document.getElementById('bookForm').reset();
});

// Handle search functionality
document.getElementById('searchBtn').addEventListener('click', () => {
  const searchTerm = document.getElementById('searchTerm').value;
  library.searchBook(searchTerm);
});
