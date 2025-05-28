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

addBookToLibrary('Harry Potter', 'JK Rowling', 123, true); // Manual book additions.
addBookToLibrary('hurr', 'durr', 222);
addBookToLibrary('qwert', 'yuio', 333, false);
addBookToLibrary('vfbgnh', 'mj,k.l', 4444, true);
addBookToLibrary('poiu', 'ytrwe', 55555, true);
console.log(myLibrary);

function displayLibrary() {

    // Iterate through entire library array, populating the table to display books.

    for (const book of myLibrary) {
        addRow(book);
    }
}

displayLibrary();

function addRow(book) {
    const table = document.getElementById('library-table');
    const newRow = table.insertRow();

    newRow.dataset.id = book.id; // Adds data-id="c0bc0999-01fd-4e93-9d7c-5c9b8847fe23" (example) to the new <tr> element.

    const titleCell = newRow.insertCell();
    titleCell.textContent = book.title;

    const authorCell = newRow.insertCell();
    authorCell.textContent = book.author;

    const pagesCell = newRow.insertCell();
    pagesCell.textContent = book.pages;

    const isReadCell = newRow.insertCell();
    isReadCell.textContent = book.isRead;
}



// Add new book button functionality.

const addNewBookButton = document.getElementById('addNewBookButton');
addNewBookButton.addEventListener ('click', function(event) {
    addBookToLibrary('poiu', 'ytrwe', 55555, true);
    const latestAddition = myLibrary[myLibrary.length - 1];
    addRow(latestAddition);
});