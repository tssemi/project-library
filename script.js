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
}

const form = document.querySelector('.form');
const newBook = document.querySelector('.newBook');
const books = document.querySelectorAll('.form div input');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
});

newBook.addEventListener("click", (e) => {
    books.forEach(e => {
        if (e.getAttribute("type") == 'radio') {
            if (e.checked == true) e.checked = false; 
        } else e.value = '';
    });
})