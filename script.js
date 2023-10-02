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

// Destructuring for {exact name of prop,exact name of prop} and [whateverName,whateverName]
const books = getBooks();
const book = getBook(2);
console.log(book);

const { title, author, pages, genres, publicationDate } = book;

console.log(title, author, genres, publicationDate);

const firstGenre = genres[0];
console.log(firstGenre);

const [a, b, ...c] = genres;
console.log(a);
console.log(b);
console.log(...c);

//Rest Spread Operator {},[]
// line 157 rest operator , rest should be the last
// note const x = [genres,y] = > [[genres],[x]] notGood

const newGenre = [...genres, 'Adult']; // spread operator! // or
//const newGenre = ['Adult',...genres]; // spread operator! change order is possible!
console.log(newGenre);

const newUpdatedBookA = { book, isAdult: false }; //>{{},{}} notGood
console.log(newUpdatedBookA);

const newBookUpdatedB = { ...book, isAdult: false, pages: 10000 }; // add(isAdult) and update existing(pages) : for update sth ... must be first because .. contains all obj and the same obj overwrite it!
console.log(newBookUpdatedB);

//Template Literals

const summary = `${title} and ${author} & ${pages} & ${
  publicationDate.split('-')[0] // work ins here with methods and also look at split method
}`;
console.log(summary);

//Ternaries Instead of ifelse Statements.

// () ? '' : ''
// it returns a result
// also can be in `${x ? '' : ''}`
const pageResult = pages > 1000 ? 'WOw ☠️' : '☕';
console.log(pageResult);

// Arrow Functions

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

// ShortCircuiting And Logical Operators
