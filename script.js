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
    let read = document.querySelector('input[type="radio"]');

    myLibrary.push(new Book(title.value, author.value, numPages.value, read.value))
    console.log(myLibrary);
}

const submit = document.querySelector('button[type="submit"]');

submit.addEventListener("click", (e) => {
    e.preventDefault()
    addBookToLibrary()
});

const newBook = document.querySelector('.newBook');
const books = document.querySelectorAll('.form div input');


newBook.addEventListener("click", (e) => {
    books.forEach(e => {
        e.value = '';
    });
})