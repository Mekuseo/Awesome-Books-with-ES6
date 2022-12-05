import {contact, contactLink} from './modules/contact.js'
import {allBooks, listLink} from './modules/bookList.js'
import {addBook, addNew} from './modules/addBook.js'
import {Book, StoreBook} from "./modules/newBook.js"

// Add event listener to contact link
contactLink.addEventListener('click', () => {
  contact();
});

// Add event listener to Book Lists link
listLink.addEventListener('click', () => {
  allBooks();
});

// Add event listener to Add-Book link
addNew.addEventListener('click', () => {
  addBook();
});

