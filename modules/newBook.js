const listOfBooks = document.querySelector('.awesome-book-list');
const head = document.querySelector('.all-book');

export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.bookId = Math.random().toFixed(1);
  }
}

export class StoreBook {
  constructor() {
    this.bookData = [];
  }

  // Add new Book to the book list
  addBook(newBook) {
    this.bookData.push(newBook);
    localStorage.setItem('BookDB', JSON.stringify(this.bookData));
    DisplayBooks(newBook);
  }

  // Remove book from the list
  removeBook(bookId) {
    const rmvBook = document.getElementById(bookId);
    rmvBook.remove();
    removeSuccess();
    this.bookData = this.bookData.filter((x) => x.bookId !== bookId);
    localStorage.setItem('BookDB', JSON.stringify(this.bookData));
  }
}

const saveBook = new StoreBook();
function getFormInput() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const insertBook = new Book(title.value, author.value);
  return insertBook;
}

// Display the list of books on the web page
function DisplayBooks(index) {
  let bgColor = '';
  if (saveBook.BookData.indexOf(index) % 2 !== 0) {
    bgColor = 'white';
  } else {
    bgColor = 'light';
  }
  const displayBook = document.createElement('div');
  displayBook.classList.add('book-item');
  displayBook.classList.add(bgColor);
  displayBook.setAttribute('id', index.bookId);
  displayBook.innerHTML = `<p>${index.title} by ${index.author}</p>`;
  const removeBook = document.createElement('button');
  removeBook.innerHTML = 'Remove';
  removeBook.addEventListener('click', () => saveBook.removeBook(index.bookId));
  displayBook.appendChild(removeBook);
  listOfBooks.appendChild(displayBook);
}

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const addNewBook = document.getElementById('add-btn');

// Form Verification
addNewBook.addEventListener('click', () => {
  if (title.value === '' && author.value === '') {
    showAlert();
  } else {
    const item = getFormInput();
    saveBook.addBook(item);
    success();
  }
});

function showAlert() {
  const div = document.createElement('div');
  div.className = 'error';
  div.appendChild(document.createTextNode('fields are required'));
  const newB = document.querySelector('.new-books');
  newB.appendChild(div);
  setTimeout(() => document.querySelector('.error').remove(), 3000);
}

function success() {
  const div = document.createElement('div');
  div.className = 'success';
  div.appendChild(document.createTextNode('Book successfully added!'));
  const newB = document.querySelector('.new-books');
  newB.appendChild(div);
  setTimeout(() => document.querySelector('.success').remove(), 3000);
}

function removeSuccess() {
  const div = document.createElement('div');
  div.className = 'remove-book';
  div.appendChild(document.createTextNode('Book Deleted Successfully!'));
  head.appendChild(div);
  setTimeout(() => document.querySelector('.remove-book').remove(), 3000);
}

window.onload = () => {
  saveBook.BookData = JSON.parse(localStorage.getItem('BookDB' || '[]'));
  if (saveBook.BookData === null) {
    saveBook.BookData = [];
    return;
  }
  saveBook.BookData.forEach((item) => DisplayBooks(item));
};

const date = new Date().toLocaleString();
document.querySelector('.date').innerHTML = date;