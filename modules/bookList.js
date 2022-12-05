const allBook = document.querySelector('.all-book');
export const listLink = document.querySelector('#list')
const add = document.querySelector('.add-new-book');
const contact = document.querySelector('.contact');
const awesomeBookList = document.querySelector('.awesome-book-list');
const list = document.querySelector('.book-list');

export function allBooks() {
  awesomeBookList.style.display = 'block';
  add.style.display = 'none';
  allBook.style.display = 'block';
  contact.style.display = 'none';
  list.style.display = 'block';
}