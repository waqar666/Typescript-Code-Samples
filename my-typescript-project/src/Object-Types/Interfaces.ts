//scenario where we're creating an application to manage a library system.
interface Address{street: string; city: string; state: string; zipCode: number;}
interface Library{name:string, address:Address, numofbooks?:number, books:Book[], addBook:(newbook:Book)=>void }
interface Book{readonly id:number, title:string,author:Author, available:boolean}
interface Author{ name: string, [key:string]:any}
interface SpecialLibrary extends Library{specialCollection: string[]}
const authorbook:Author = {name: "Jane Doe", nationality: "American", birthYear: 1980,}
const mainLibrary: Library = {
    name: "Central Library",
    address: {
      street: "123 Library St",
      city: "Booktown",
      state: "Readsylvania",
      zipCode: 12345,
    },
    books: [], // Initially empty
    addBook(newBook: Book) {
      this.books.push(newBook);
    },
  };  
  // Creating an author with dynamic properties
  const author: Author = {
    name: "Jane Doe",
    nationality: "American",
    birthYear: 1980,
  };  
  // Creating a book
  const newBook: Book = {
    id: 1,
    title: "The Great Novel",
    author: author,
    available: true,
  };  
  // Adding the book to the library
  mainLibrary.addBook(newBook);  
  // Creating a special library
  const specialLibrary: SpecialLibrary = {
    name: "Special Collections Library",
    address: {
      street: "456 Archive Rd",
      city: "Historium",
      state: "Ancientland",
      zipCode: 67890,
    },
    books: [],
    specialCollection: ["Rare Manuscripts", "Ancient Maps"],
    addBook(newBook: Book) {
      this.books.push(newBook);
    },
  };  
  // Adding a book to the special library
  specialLibrary.addBook(newBook);  
  // Accessing library details
  //console.log(mainLibrary.name); // Output: "Central Library"
  //console.log(specialLibrary.specialCollection); // Output: ["Rare Manuscripts", "Ancient Maps"]
  //functions to manage the library and books in a functional style
  type BooksArray = ReadonlyArray<Book>
  const createbook = (id:number,title:string,author:Author,available:boolean):Book => {
    return {
    id, title, author,available
  } }
  const book1 = createbook(4, "fff", author, true); const book2 = createbook(5, "hhh", author, false)
  const addbooktolibrary = (book:Book) => {mainLibrary.addBook(book)}
   const getallbooks = ():BooksArray => {
    return mainLibrary.books as BooksArray
   }
   addbooktolibrary(book1); addbooktolibrary(book2)
  const getavailablebooks = mainLibrary.books.filter((book)=> book.available)
  const getallauthors = mainLibrary.books.map((book) => book.author)
  console.log(getavailablebooks); console.log(getallauthors);console.log(getallbooks());

  