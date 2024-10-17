class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }

  // Display book details in a readable format
  getDetails() {
    return `${this.title} by ${this.author}, published in ${this.year}, Genre: ${this.genre}`;
  }
}

class Library {
  constructor() {
    // Load books from local storage and convert them to Book instances
    const storedBooks = JSON.parse(localStorage.getItem('libraryBooks')) || [];
    this.books = storedBooks.map(
      bookData =>
        new Book(bookData.title, bookData.author, bookData.year, bookData.genre)
    );
  }

  // Add a new book to the library

  addBook(book) {
    this.books.push(book);
    this.saveToLocalStorage();
    console.log(`"${book.title}" has been added to the library.`);
  }

  displayBooks() {
    if (this.books.length === 0) {
      console.log('No books in the library.');
      return;
    }
    console.log('Library Books:');
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.getDetails()}`); // This line calls getDetails()
    });
  }

  // Search for books by title or author
  searchBook(searchTerm) {
    const foundBooks = this.books.filter(
      book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (foundBooks.length === 0) {
      console.log(`No books found for the search term: "${searchTerm}".`);
    } else {
      console.log('Search Results:');
      foundBooks.forEach((book, index) => {
        console.log(`${index + 1}. ${book.getDetails()}`);
      });
    }
  }

  // Remove a book by title
  removeBook(title) {
    const index = this.books.findIndex(
      book => book.title.toLowerCase() === title.toLowerCase()
    );

    if (index === -1) {
      console.log(`Book titled "${title}" not found.`);
      return;
    }

    const removedBook = this.books.splice(index, 1)[0];
    this.saveToLocalStorage();
    console.log(`"${removedBook.title}" has been removed from the library.`);
  }

  // Save the library array to local storage
  saveToLocalStorage() {
    localStorage.setItem('libraryBooks', JSON.stringify(this.books));
  }
}

// Usage Example:

const library = new Library();

// Adding books
const book1 = new Book(
  'Things Fall Apart',
  'Chinua Achebe',
  1958,
  'Historical Fiction'
);
const book2 = new Book(
  'Half of a Yellow Sun',
  'Chimamanda Ngozi Adichie',
  2006,
  'Historical Fiction'
);
const book3 = new Book(
  "The Secret Lives of Baba Segi's Wives",
  'Lola Shoneyin',
  2010,
  'Contemporary Fiction'
);
const book4 = new Book(
  'Stay With Me',
  'Ayobami Adebayo',
  2017,
  'Literary Fiction'
);
const book5 = new Book(
  'My Sister, the Serial Killer',
  'Oyinkan Braithwaite',
  2018,
  'Thriller/crime Fiction'
);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

// Displaying all books
library.displayBooks();

// Searching for a book
library.searchBook('Ayobami Adebayo'); // Search by author
library.searchBook('1958'); // Search by title

// Removing a book
library.removeBook('1949');

// Displaying books after removal
library.displayBooks();
