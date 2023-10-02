const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// 1-Destructuring for {exact name of prop,exact name of prop} and [whateverName,whateverName]
const books = getBooks();
const book = getBook(1);
console.log(book);

const { title, author, pages, genres, publicationDate } = book;

console.log(title, author, genres, publicationDate);

const firstGenre = genres[0];
console.log(firstGenre);

const [a, b, ...c] = genres;
console.log(a);
console.log(b);
console.log(...c);

//2-Rest Spread Operator {},[]
// line 157 rest operator , rest should be the last
// note const x = [genres,y] = > [[genres],[x]] notGood

const newGenre = [...genres, 'Adult']; // spread operator! // or
//const newGenre = ['Adult',...genres]; // spread operator! change order is possible!
console.log(newGenre);

const newUpdatedBookA = { book, isAdult: false }; //>{{},{}} notGood
console.log(newUpdatedBookA);

const newBookUpdatedB = { ...book, isAdult: false, pages: 10000 }; // add(isAdult) and update existing(pages) : for update sth ... must be first because .. contains all obj and the same obj overwrite it!
console.log(newBookUpdatedB);

//3-Template Literals

const summary = `${title} and ${author} & ${pages} & ${
  publicationDate.split('-')[0] // work ins here with methods and also look at split method
}`;
console.log(summary);

//4-Ternaries Instead of ifelse Statements.

// () ? '' : ''
// it returns a result
// also can be in `${x ? '' : ''}`
const pageResult = pages > 1000 ? 'WOw ☠️' : '☕';
console.log(pageResult);

// 5-Arrow Functions

// const myFuc = a => a+1
// const myFuc = (a,b) => a+b
// const myFuc = (a, b) => {
//   more than one line
//   a + 100;
//   a + b;
//   return a + b;
// };

const getYear = (strDate) => strDate.split('-')[0];
console.log(getYear(publicationDate));

// 6-ShortCircuiting And Logical Operators && ||
//short circuiting in logical operators means that, in certain conditions,the operator will immediately return the first value and not even look at the second value.

// &&  > like if
//this operator short circuits when they first operate.So when the first value is false and then will immediately return that first value.

console.log(true && 'Some Strings'); // Some Strings
console.log(false && 'Some Strings'); // false

// falsy : 0,'',null, undefined
console.log('string 1' && 'string 2'); // string 2

// || : works unlike && > using for default value
console.log(true || 'string 1'); // true
console.log(false || 'string 1'); // string 1

const spanishTranslation = book.translations.spanish || 'not Translated';
console.log(spanishTranslation); // not Translated

// attention
console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || 'No data';
console.log(countWrong); // no data

// 7-nullish operator : when the first value is null or undefined,
const count = book.reviews.librarything.reviewsCount ?? 'No data';
console.log(count); // 0

// 8-Optional Chaining
// ?. => if before exists then continue (not null  or undefined)
// in this scenario we can use  both ? and ??  => null ?? works otherwise everything is good!
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));

// 9-The Array map Method
// functional array methods in JavaScript because this method does not mutate the original array but do instead return a new array based on the original one.

const newArr = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(newArr); // [2,4,6,8,10]

const allTitles = books.map((book) => book.title);
console.log(allTitles);

const allAuthors = books.map((book) => book?.author);
//const allAuthors = books.map((book) => book?.author ?? 'Whatever');
console.log(allAuthors);

// if we wanted to return an obj and as result we have an array of obj
const essentialInfo = books.map((book) => {
  return {
    // this is fr having obj
    title: book.title,
    author: book.author,
    pages: book.pages ?? 0,
    reviewsCount: getTotalReviewCount(book),
  };
});
// or you can remove return and instead ()
const essentialInfoB = books.map((book) => ({
  title: book.title,
  author: book.author,
  pages: book.pages ?? 0,
}));
console.log(essentialInfo);
console.log(essentialInfoB);

// 10-The Array filter Method
// functional array methods in JavaScript because this method does not mutate the original array but do instead return a new array based on the original one.
// to filter out some elements of the array based on a condition.

const longBooks = books.filter((book) => book.pages > 500);
console.log(longBooks);
// filter in filter! : chain filter
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovie);
// or const longBooksWithMovie = longBooks.filter(book=>book.hasMovieAdaptation);
// --

const adventureBooks = books
  .filter(
    (book) => book.genres.includes('adventure') // include always is true of false!
  )
  .map((book) => book.title);
console.log(adventureBooks);

// 11-The Array reduce Method
// functional array methods in JavaScript because this method does not mutate the original array but do instead return a new array based on the original one.

// const pagesAllBooks = books.reduce((acc, book) => {
// return acc + book.pages;
// }, 0);
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

// 12-The Array sort Method
// Mute the array!
// ascending way a-b
// descending way b-a
const numbersA = [1, 6, 9, 6, 5, 8, 7, 4, 1, 5];
const numbersB = [1, 6, 9, 6, 5, 8, 7, 4, 1, 5];
const sortDsc = numbersA.sort((a, b) => b - a); // the source will be sorted!
const sortAsc = numbersB.sort((a, b) => a - b);
const sortAscCopy = numbersB.slice().sort((a, b) => a - b);
console.log(sortAsc);
console.log(sortDsc);

// best way is to copy from array and then sort!
// .slice() >> bring a new copy

const sortedByPagesDsc = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPagesDsc);

// 13-Working With Immutable Arrays : to add elements, how to delete elements,and how to update elements of an array without changing the original one.
const newBook = {
  id: 6,
  title: 'Whatever you want!',
  author: 'whoever you know',
};
// add a book : ...spread

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

//  delete a book obj from an array : filter()

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// update a book obj in an array : map() +  ....spread

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 200000000 } : book
);

console.log(booksAfterUpdate);

// 14- Asynchronous JavaScript Promises

const todoResultA = fetch('https://api.adviceslip.com/advice/1')
  .then((response) => response.json()) // to handle full filled!
  .then((data) => console.log(data)) //.then((data) => console.log(data)) // or
  .catch((err) => err.message); // to handle full rejected!

console.log('D!-1'); // first this would be printed and then todoResult!

// 15 - Asynchronous JavaScript AsyncAwait

const url = 'https://api.adviceslip.com/advice/2';
async function getTodoAsync(url) {
  try {
    const todoResultB = await fetch(url);
    const response = await todoResultB.json();
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

getTodoAsync(url);
console.log('D!-2'); // first this would be printed and then todoResult!

// with returning Value
const urlA = 'https://api.adviceslip.com/advice/3';
async function getTodoWithReturnAsync(url) {
  try {
    const todoResultB = await fetch(url);
    const response = await todoResultB.json();
    return response.slip.advice;
  } catch (error) {
    console.log(error.message);
  }
}
// note to have return value we have put it again in async function or IIFE , or in a module!
// most often we don't return like this and pass to state!

(async function () {
  const res = await getTodoWithReturnAsync(urlA);
  console.log(res);
})();
