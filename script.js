const myLibrary = [];

function Book(title, author, pages, isRead) { 
    // The constructor for books.
    if (!new.target) { // Safeguard to prevent calling Book() without new.
        return new Book(title, author, pages, isRead);
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead || false; // Default is unread, if not provided.
}

function addBookToLibrary(title, author, pages, isRead) {
    // take params, create a book, then store it in the array
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

addBookToLibrary('Harry Potter', 'JK Rowling', 123, true); // Manual test.
console.log(myLibrary);

console.log(myLibrary[0]);

function displayLibrary() {
    /* Need a function that loops through the library array and displays
each book on the page. Displaying in some sort of table would be nice,
otherwise, cards representing each book could work too. */

}