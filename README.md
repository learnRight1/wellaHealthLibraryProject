JavaScript Objects Practical Project
Project: Library System
Description:
You will create a JavaScript-based library system where users can add, view, search for, and
remove books. Each book will be represented as an object, and the collection of books will be
stored in an array.
The project will help you practice working with object properties, methods, and manipulation, and will
give you hands-on experience building a functional system.
Key Features:

1. Add a Book:

- Function that allows users to add a book object (with title, author, year of publication, and genre)
  to the library array.

2. Display All Books:

- Display the entire library by looping through the array of book objects and showing their
  properties.

3. Search for a Book:

- Allow users to search for a book by title or author, filtering the list and displaying matching
  results.

4. Remove a Book:

- Implement a function to remove a book from the library based on its title.

5. (Bonus) Save Library to Local Storage:

- Save the library array to the browser's local storage, allowing users to retrieve their list of books
  even after refreshing the page.
  Example Object Structure
  const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  genre: "Fiction"
  };
  Skills You'll Practice
- Creating and manipulating JavaScript objects.
- Storing objects in arrays.
- Looping through arrays of objects.
- Implementing search and filter functions.
- Using browser local storage (optional).
  Possible Extensions
- Add a rating system for books.
- Allow sorting books by title, author, or year.
- Group books by genre.
  Implementing the Search Feature
  To implement the "Search for a Book" feature, follow the steps below:

1. Store books as objects in an array.
2. Use JavaScript's `filter()` method to search for books by title or author.
3. Convert both the search query and the object properties to lowercase to ensure case insensitivity.
4. Display the results to the user.

### Pseudocode Example:

```
CREATE an array called library
 Each element in the array is an object with properties: title, author, year, genre
CREATE a function called searchBooks that takes a parameter query
 Convert query to lowercase
 FILTER the library array
 For each book in the library:
 IF the book's title or author (converted to lowercase) contains the query
 INCLUDE that book in the filtered results
RETURN the filtered list of books
PROMPT the user to input a search query
CALL searchBooks with the user's query
IF the search returns results
 DISPLAY each book's title and author
ELSE
 DISPLAY "No books found"
```

This pseudocode outlines how to implement a simple search feature within the library system.
