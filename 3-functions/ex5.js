const books = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

//FOR
function getBooksByAuthor(booksArray, authorName) {
  for (let i = 0; i < booksArray.length; i++) {
    if (booksArray[i].author === authorName) {
      return booksArray[i];
    }
  }
}

//FILTER
function getBooksByAuthor(booksArray, authorName) {
  const filter = booksArray.filter((book) => book.author === authorName);
  return filter;
}

const result = getBooksByAuthor(books, "Harper Lee");

console.log(result);
