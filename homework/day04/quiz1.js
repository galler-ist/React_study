const book = {
  title: "한 입 크기로 잘라먹는 리액트",
  author: "이정환",
  // publishedYear 속성은 이 객체에는 없습니다.
};

function checkpublish(book) {
  book_publishedYear = book.publishedYear;
  if (book_publishedYear) {
    console.log(`출판년도는 ${book_publishedYear}입니다.`);
  } else {
    console.log("출판년도 정보가 없습니다.");
  }
}

checkpublish(book);
