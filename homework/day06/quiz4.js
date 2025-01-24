function getSortedBooks(books) {
  let sortedBooks = books.toSorted((bookA, bookB) => {
    if (bookA.published.getTime() > bookB.published.getTime()) {
      return -1;
    } else if (bookA.published.getTime() < bookB.published.getTime()) {
      return 1;
    } else {
      return 0;
    }
  });
  let LocaleBooks = sortedBooks.map((book) => ({
    ...book,
    // published: book.published.toISOString(),
    published: book.published.toLocaleString(),
  }));
  return LocaleBooks;
}

const sortedBooks = getSortedBooks([
  {
    title: "한입 리액트",
    published: new Date("2023. 04. 06"),
  },
  {
    title: "웹 프론트엔드 첫 걸음",
    published: new Date("2024. 04. 30"),
  },
  {
    title: "이펙티브 타입스크립트",
    published: new Date("2021. 06. 27"),
  },
  {
    title: "클린코드",
    published: new Date("2013. 12. 24"),
  },
]);

console.log(sortedBooks);
