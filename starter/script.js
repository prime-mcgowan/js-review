const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
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
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
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
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
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
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
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
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
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

/*
// Destructuring
const book = getBook(3);
book;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author, genres);

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: 1600,
};
updatedBook;

const summary = `${title} is a ${pages} page book, was written by ${author} and published ${
  publicationDate.split("-")[0]
}.`;
summary;

//21. Ternary Operator

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The ${title} has ${pagesRange} pages.`);

//22. Arrow Functions

const getYear = (str) => str.split("-")[0];

//23. Short Circuiting & Logical Operators

console.log(true && "Some string");

//falsy = null, 0, '', undefined
// will look at the first value to judge true/false AND will also look at the second value

// && = and
// || = or
// ?? = nullish / coallesing (returns the second value when the first is null or undefined)

//24. Optional Chaining Operator

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  //the singular question mark after book.reviews.librarything checks to see if the even exists
  //if there are no review counts form librarything then it will be zero instead of undefined using the ??
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

//25. The Map Method

const books = getBooks(); //gives us the entire array of books
books;

//For each book element...the title is being returned and stores in titles
const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

essentialData;

//26. Filter Method

//each book is looked at if it's TRUE that it has more than 500 pages then it will be added to the new array
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

//filter and map combined
const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//27. Reduce Method
// boil down entire array to one value

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
// acc or sum = accumulator...starts at 0
// after the first iteration that 0 on the end changes to the # of pages of the first book
pagesAllBooks;

//28. Sort Method
// mutates / changes the original array
// .slice makes a copy of the array and just sorts that

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);

sortedByPages;
