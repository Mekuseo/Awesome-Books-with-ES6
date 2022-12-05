

const list = document.querySelector('.book-list');
export const contactLink = document.querySelector('#contact');
const add = document.querySelector('.add-new-book');
export const allBook = document.querySelector('.all-book');
const contacts = document.querySelector('.contact');
const bookList = document.querySelector('.book-list');

export function contact () {
  list.style.display = 'block';
  add.style.display = 'none';
  allBook.style.display = 'none';
  contactLink.style.display = 'block';
  contacts.style.display = 'block';
  bookList.style.display = 'none';
}