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
    this.isRead = isRead || false; // If not provided, default is false.
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
document.addEventListener ('click', function(event) {
    
    // "Delete" button functionality.
    if (event.target.classList.contains('delete-row-button')) {
        const row = event.target.closest('tr');
        row.remove();
        const bookID = event.target.closest('tr').getAttribute('data-id');
        const index = myLibrary.findIndex(book => book.id === bookID);
        myLibrary.splice(index, 1);
        console.log(myLibrary); // To log updated library array in console.
    }

    // "Add new book" button functionality.
    if (event.target.id === 'addNewBookButton') {

        const dialog = document.querySelector("dialog");
        const cancelButton = document.getElementById("cancelButton");
        const submitButton = document.getElementById("submitButton");
        const form = document.getElementById('addNewBookForm');

        // "Add new book" button opens the dialog modal.
        dialog.showModal();

        // "Submit" button adds the new book from the inputted data form.
        submitButton.addEventListener("click", (event) => {
            event.preventDefault();

            // Trigger browser validation UI
            if (!form.reportValidity()) {
                return; // Stop if any HTML5 validation fails
            };            
                        
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const pages = document.getElementById('pages').value;
            const read = document.getElementById('read-status').checked;
            
            // Now that the input form is validated, add the new book info to library.
            addBookToLibrary(title, author, pages, read);

            // Display newly added book.
            const latestAddition = myLibrary[myLibrary.length - 1];
            addRow(latestAddition);
            console.log(myLibrary); // To log updated library array in console.

            // Close dialog and reset form data.
            form.reset();
            dialog.close();
            return;
        });
        
        // "Cancel" button closes the dialog
        cancelButton.addEventListener("click", () => {
        dialog.close();
        document.getElementById('addNewBookForm').reset();
        });


    }

    // "Change read status" button functionality.
    if (event.target.classList.contains('changeReadStatusButton')) {

        // Change read property in object.
        const bookID = event.target.closest('tr').getAttribute('data-id');
        const bookObject = myLibrary.find(book => book.id === bookID);
        bookObject.isRead = !bookObject.isRead; // Toggles from true to false or vice versa.

        // Update display from new property value in object.
        const cell = event.target.closest('td');
        const textNode = cell.firstChild;
        textNode.textContent = bookObject.isRead;
    }
});
