const myLibrary = []; // Array used to store the books.

class Book { 
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead || false;
        this.id = crypto.randomUUID();
    }
}

// Function to take params, create a book, then store it in the array.
function addBookToLibrary(title, author, pages, isRead) {    
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

// Initial state of myLibrary array, which should be empty.
console.log(myLibrary);

// Iterate through entire library array, populating the table to display books.
function displayLibrary() {
    for (const book of myLibrary) {
        addRow(book);
    }
}

// Populate myLibrary with some placeholder books.
addBookToLibrary('Harry Potter', 'JK Rowling', 652, true);
addBookToLibrary('The Lord of the Rings', 'JRR Tolkien', 36520, false);
addBookToLibrary('Cook Book', 'Mom', 351, true);
addBookToLibrary('Autobiography', 'Trithereon', 864, true);
addBookToLibrary('The Holy Bible', 'God', 6495, false);

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
    const changeReadStatusButton = document.createElement('button');
    changeReadStatusButton.className = 'changeReadStatusButton';
    changeReadStatusButton.textContent = 'Toggle';
    isReadCell.appendChild(changeReadStatusButton);

    const deleteRowCell = newRow.insertCell();
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete-row-button';
    deleteRowCell.appendChild(deleteButton);
}

// Buttons
document.addEventListener('click', function(event) {
    
    // "Delete" button functionality.
    if (event.target.classList.contains('delete-row-button')) {
        const row = event.target.closest('tr');
        const bookID = event.target.closest('tr').getAttribute('data-id');
        const index = myLibrary.findIndex(book => book.id === bookID);
        myLibrary.splice(index, 1);
        row.remove();
        console.log(myLibrary); // To log updated library array in console.
    }

    // "Add new book" button functionality.
    else if (event.target.id === 'addNewBookButton') {
        document.querySelector('dialog').showModal();
    }

    // "Change read status" button functionality.
    else if (event.target.classList.contains('changeReadStatusButton')) {

        // Change read property in object.
        const bookID = event.target.closest('tr').getAttribute('data-id');
        const bookObject = myLibrary.find(book => book.id === bookID);
        bookObject.isRead = !bookObject.isRead; // Toggles from true to false or vice versa.

        // Update display from new property value in object.
        const cell = event.target.closest('td');
        cell.firstChild.textContent = bookObject.isRead;
    }
});

// "Add New Book" form handling.
const form = document.getElementById('addNewBookForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Trigger browser validation UI
    if (!this.reportValidity()) return; // Stop if any HTML5 validation fails
                
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read-status').checked;
    
    // Now that the input form is validated, add the new book info to library.
    addBookToLibrary(title, author, pages, read);

    // Display new book in table.
    addRow(myLibrary[myLibrary.length - 1]);
    console.log(myLibrary); // To log updated library array in console.

    this.reset();
    document.querySelector('dialog').close();
});

// "Cancel" button closes the "Add New Book" modal.
document.getElementById('cancelButton').addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.getElementById('addNewBookForm');

    // Reset input field values.
    form.querySelectorAll('input').forEach(input => {
        input.value = '';
        input.blur(); // Remove focus on input fields to avoid validation errors.
    });

    document.querySelector('dialog').close();
});
