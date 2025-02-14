const myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

function addBookToLibrary() {
  let title = prompt("Book's title: ", );
  let author = prompt("Book's author: ", );
  let numPages = prompt("Book's number of pages: ", );
  let read;
  do {
    read = prompt("Have you already read it?: ", );
  } while (read !== 'yes' && read !== 'no' && read !== false);
  
  read = checkReadVal(read);
  function checkReadVal(read) {
    if (read == 'yes') {
        return true
    } else if (read == 'no') {
        return false
    } else return read;
  }

  myLibrary.push(new Book(title, author, numPages, read))
}

//addBookToLibrary()