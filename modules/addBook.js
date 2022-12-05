
export const addNew = document.querySelector('#add-new')
const addNewBook = document.querySelector('.add-new-book');
const contact = document.querySelector('.contact');
const bookList = document.querySelector('.book-list');

export function addBook(){
  addNewBook.style.display = 'flex';
  contact.style.display = 'none';
  bookList.style.display = 'none';
}