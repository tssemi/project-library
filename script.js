const myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let numPages = document.querySelector('#pages');
    let read = document.querySelector('input[type="radio"]:checked');

    myLibrary.push(new Book(title.value, author.value, numPages.value, read.value))
    console.log(myLibrary);

    Object.defineProperty(myLibrary[myLibrary.length - 1], 'index', {value:`${myLibrary.length - 1}`});

    const library = document.querySelector(".books-library");
    const book = document.createElement("div");
    book.className = "book";

    for (const ele in myLibrary[myLibrary.length - 1]) {
        const newDiv = document.createElement("div");
        newDiv.textContent = myLibrary[myLibrary.length - 1][ele];
        book.appendChild(newDiv);
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
        book.remove()
    })
}

const form = document.querySelector('.form');
const newBook = document.querySelector('.newBook');
const books = document.querySelectorAll('.form div input');

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

