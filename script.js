const myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

Book.prototype.changeRead = function() {
    this.read = "true";
};

function addBookToLibrary() {
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let numPages = document.querySelector('#pages');
    let read = document.querySelector('input[type="radio"]:checked');

    myLibrary.push(new Book(title.value, author.value, numPages.value, read.value))

    const library = document.querySelector(".books-library");
    const book = document.createElement("div");
    book.className = `book-${myLibrary.length}`;

    for (const ele in myLibrary[myLibrary.length - 1]) {
        if (myLibrary[myLibrary.length - 1].hasOwnProperty(ele)) {
        console.log(myLibrary[myLibrary.length - 1][ele])
        const newDiv = document.createElement("div");
        newDiv.textContent = myLibrary[myLibrary.length - 1][ele];
        book.appendChild(newDiv);
        }
    }

    const readBtn = document.createElement("button");
    readBtn.textContent = 'Read it';
    book.appendChild(readBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'DELETE';
    deleteBtn.className = `btn-${[myLibrary.length - 1]}`
    book.appendChild(deleteBtn);

    library.appendChild(book);

    deleteBtn.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    })

    readBtn.addEventListener("click", (e) => {
        let n = e.target.parentElement.getAttribute('class').slice(-1);
        myLibrary[n - 1].changeRead();
        document.querySelector(`
            .books-library .book-${n} div:nth-last-child(3)`)
            .textContent = 'true';
    })
}

const form = document.querySelector('.library-form');
const newBook = document.querySelector('.newBook');
const books = document.querySelectorAll('.library-form div input');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
});

newBook.addEventListener("click", () => {
    books.forEach(e => {
        if (e.getAttribute("type") == 'radio') {
            if (e.checked == true) e.checked = false; 
        } else e.value = '';
    });
})

