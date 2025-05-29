const myLibrary = []; // Array used to store the books.

// The constructor function for books.

function Book(title, author, pages, isRead) { 
    if (!new.target) { // Safeguard to prevent calling Book() without new.
        return new Book(title, author, pages, isRead);
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead || false; // Default is unread, if not provided.
}

// Function to take params, create a book, then store it in the array.

function addBookToLibrary(title, author, pages, isRead) {    
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

// Manual book additions.

addBookToLibrary('Harry Potter', 'JK Rowling', 123, true); 
addBookToLibrary('hurr', 'durr', 222);
addBookToLibrary('qwert', 'yuio', 333, false);
addBookToLibrary('vfbgnh', 'mj,k.l', 4444, true);
addBookToLibrary('poiu', 'ytrwe', 55555, true);
console.log(myLibrary);

// Iterate through entire library array, populating the table to display books.

function displayLibrary() {
    for (const book of myLibrary) {
        addRow(book);
    }
}

displayLibrary();

function addRow(book) {
    const table = document.getElementById('library-table');
    const newRow = table.insertRow();

    newRow.dataset.id = book.id; // Assigns data-id attribute from book.id property to the new <tr> element.

    const titleCell = newRow.insertCell();
    titleCell.textContent = book.title;

    const authorCell = newRow.insertCell();
    authorCell.textContent = book.author;

    const pagesCell = newRow.insertCell();
    pagesCell.textContent = book.pages;

    const isReadCell = newRow.insertCell();
    isReadCell.textContent = book.isRead;

    const deleteRowCell = newRow.insertCell();
    const button = document.createElement('button');
    button.textContent = 'X';
    button.className = 'delete-row-button';
    deleteRowCell.appendChild(button);
}

// Buttons

document.addEventListener ('click', function(event) {
    
    // Delete button functionality.
    
    if (event.target.classList.contains('delete-row-button')) {
        const row = event.target.closest('tr');
        row.remove();
        const bookID = event.target.closest('tr').getAttribute('data-id');
        const index = myLibrary.findIndex(book => book.id === bookID);
        if (index !== -1) {
            myLibrary.splice(index, 1);
            console.log(myLibrary);
            return true; // Book found and removed successfully.
        }
        return false; // Book not found.
    }

    // Add new book button functionality.

    if (event.target.id === 'addNewBookButton') {
        addBookToLibrary('poiu', 'ytrwe', 55555, true);
        const latestAddition = myLibrary[myLibrary.length - 1];
        addRow(latestAddition);
    }
});
