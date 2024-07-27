//* Цілі Модуля 4:
//& 1. розуміти, що таке об'єкт у JavaScript і як його створити;
//& 2. навчитися додавати та змінювати значення властивостей об'єкта;
//& 3. дізнатися про доступні способи перебирання об’єкту;
//& 4. вміти працювати з масивом однотипних об'єктів;
//& 5. навчитися звертатися до властивості об'єкта в його методах (блок 4);
//& 6. використовувати сучасний синтаксис spread і rest та розуміти його функціонал.



//& 1.1 Що таке об'єкт у JavaScript? Як створити?
Об’єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).
Об'єкти дозволяють описати та згрупувати характеристики об'єктів реального світу, наприклад, користувач, книга, продукт магазину — чого завгодно. 

const book = {                                   //{} — літерал об'єкта - оголошує об’єкт
    title: "The Last Kingdom",                  //ключ(рядок): значення може бути об'єкти                  
    author: "Bernard Cornwell",                 //ключ: значенням  може бути об'єкти
    genres: ["historical prose", "adventure"],  //ключ: значення може бути масиви         сукупність ключів і значення є "властивість"- розділяються комою.
    public: true,                               //ключ: значення може бути булі
    rating: 8.38,                               //ключ: значення може бути число
};

Створення об'єкта
- Для оголошення об’єкта використовуються фігурні дужки {} — літерал об'єкта.
- При створенні об'єкта до нього відразу можна додати властивості, але це не обов’язково. Кожна властивість обов’язково складається з пари ключ: значення.
- Ключ також називають ім'ям властивості і це зазвичай рядок.
- Значенням властивості можуть бути будь-які типи: примітиви, масиви, об'єкти, булі, функції тощо.
- Властивості між собою розділяються комою.



//------------------------------------------------


//& Що таке властивость об'єкта? Які є властивості об'єкта?
сукупність ключів і значення об'єкта є "властивість"- розділяються комою.
значеннями властивості об'єкта можуть бути  типи даних таких як примітиви, масиви, об'єкти, булі, функції тощо.


//*Доступ до властивостей через крапку
Перший спосіб отримати доступ до властивості об'єкта — це синтаксис:

//^  objectName.key

На місце звернення буде повернуте значення властивості з таким ключем.
Якщо в об'єкті відсутня властивість з таким ключем, на місце звернення повернеться undefined.
//Здебільшого синтаксис «через крапку» використовується тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.
const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };
  const bookTitle = book.title;
  console.log(bookTitle); // "The Last Kingdom"
  const bookGenres = book.genres;
  console.log(bookGenres); // ["historical prose", "adventure"]
  const bookPrice = book.price;
  console.log(bookPrice); // undefined


  //*Вкладені властивості
Значенням властивості може бути інший об'єкт. Це використовується для зберігання вкладених і згрупованих даних.
const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    location: {
      country: "Jamaica",
      city: "Ocho Rios",
    },
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
  

//*Доступ до вкладених властивостей
Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку».
Значення властивості — це вкладений об’єкт.

Якщо необхідно отримати значення країни користувача, записуємо user.location.country, де:
user.location — це звернення (шлях) до об'єкта у властивості location,
user.location.country — звернення до властивості country в цьому об'єкті.


Тобто «крапка» вказує наступну вкладеність:
const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    location: {
      country: "Jamaica",
      city: "Ocho Rios",
    },
    hobbies: ["swimming", "music", "sci-fi"],
  };
  
  const location = user.location;
  console.log(location); // {country: "Jamaica", city: "Ocho Rios"}
  
  const country = user.location.country;
  console.log(country); // "Jamaica"


//*Значення властивості — це масив.
Якщо значення властивості — це масив, то в нашому прикладі вище звернення до цього масиву буде:

//^    user.hobbies

 const hobbies = user.hobbies;
console.log(hobbies); // ["swimming", "music", "sci-fi"]

Отримати доступ до елементів масиву можна через квадратні дужки та індекс:

//^ user.hobbies[0];

 const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swimming"

Також можна використовувати властивості й методи масиву, наприклад отримати значення його довжини з властивості length:

//^ user.hobbies.length

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3




//*Доступ до властивостей через квадратні дужки
Другий спосіб отримати доступ до властивості об'єкта — це синтаксис 

//^ objectName[”key”].

Схоже на звернення до елемента масиву з відмінністю. Відмінність полягає в тому, що в квадратних дужках зазначається не індекс елемента, а рядок з ключем (ім’ям властивості).

//!Синтаксис «квадратних дужок» використовується значно рідше. Як правило, у випадках, коли ім'я властивості заздалегідь не відоме або воно зберігається у змінній, наприклад, як значення параметра функції.
const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };
  
  console.log(book.title); // "The Last Kingdom" 
  console.log(book["title"]); // "The Last Kingdom" 
  
  console.log(book.genres); // ["historical prose", "adventure"]
  console.log(book["genres"]); // ["historical prose", "adventure"]
  
  const propKey = "author";
  console.log(book.propKey); // undefined
  console.log(book[propKey]); // "Bernard Cornwell"
  
  //!У прикладі вище:
  console.log(book.propKey); — це undefined, оскільки в об’єкті book немає властивості з ключем propKey.
  console.log(book[propKey]); — це "Bernard Cornwell", оскільки значенням змінної propKey є рядок “author”, і в об’єкті book є властивість з ключем author, то цей запис поверне значення властивості author).


//----------------------


//& 2. навчитися додавати та змінювати значення властивостей об'єкта;

//*Зміна значення властивостей
Після того як об'єкт створений, значення його властивостей можна змінити.
Для цього необхідно звернутися до них за ключем, наприклад, «через крапку», і присвоїти нове значення.

//^    objectName.key = newvalue

const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };
  
  book.rating = 9;
  book.isPublic = false;
  book.genres.push("drama");
  
  console.log(book.rating); // 9
  console.log(book.isPublic); // false
  console.log(book.genres); // ["historical prose", "adventure", "drama"]


//*Додавання властивостей
Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості.
Якщо під час запису значення за ключем така властивість відсутня в об'єкті, вона буде створена.
const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };
  book.pageCount = 836;
  book.originalLanguage = "en";
  book.translations = ["ua", "ru"];
  book.price = {
    hardcover: 39,
    softcover: 29,
  };
  console.log(book.pageCount); // 836
  console.log(book.originalLanguage); // "en"
  console.log(book.translations); // ["ua", "ru"]

//*Короткі властивості
Іноді під час створення об'єкта значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям, як і сама властивість.

Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості.
const name = "Henry Sibola";
const age = 25;

const user = {
  name,
  age,
};

console.log(user.name); // "Henry Sibola"
console.log(user.age); // 25

*Замість name: name, використали name.
*А замість age: age, — age.
Тобто під час оголошення об'єкта достатньо вказати тільки ім'я властивості, а значення буде взято зі змінної з аналогічним ім'ям.

//*Обчислювальні властивості
Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно зберігається як значення змінної або як результат виконання функції.

Синтаксис обчислювальних властивостей (computed properties) допомагає уникнути зайвого коду і в деяких випадках спростити його.

//^     [meaning of const]: value

const propName = "name";
const user = {
  age: 25,
  // ключ цієї властивості буде взято зі значення змінної propName
  [propName]: "Henry Sibola",
};
console.log(user.name); // "Henry Sibola"

//----------------------------------------------------------


//& 3. Доступні способи перебирання об’єкту

//*Перебір об'єкта

//? 1)  Цикл for...in - перебирає ключі об'єкта object
//!На відміну від масиву або рядка, об'єкт — це не ітерабельна сутність, тобто його не можна перебрати циклами for або for...of.
Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

//^     for (key in object) {// інструкції}
  

- Змінна key доступна тільки в тілі циклу.
- На кожній ітерації в неї буде записано значення ключа (ім'я) властивості.
- Для того щоб отримати значення властивості з таким ключем (ім'ям), використовується синтаксис квадратних дужок.
    
    const book = {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        genres: ["historical prose", "adventure"],
        rating: 8.38,
      };
      
      for (const key in book) {
        console.log(key); // Ключ
        console.log(book[key]);  // Значення властивості з таким ключем
      }

//? 2) Метод Object.keys() - приймає об'єкт і повертає масив ключів його властивостей. Якщо в об'єкті немає властивостей, метод поверне порожній масив.
Вбудований клас Object має кілька корисних методів для роботи з об'єктами.
const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
  };
  const keys = Object.keys(book);
  console.log(keys); // ['title', 'author', 'genres', 'rating']


  *Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати властивості об'єкта, не вдаючись до використання циклу for...in.
  const book = {
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
  };
  const keys = Object.keys(book);
  
  for (const key of keys)
    console.log(key); // Ключ
    console.log(book[key]); // Значення властивості



//? 3)Метод Object.values()-повертає масив значень властивостей об'єкта.
const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  };
  const keys = Object.keys(book);
  console.log(keys); // ["title", "author", "rating"]
  
  const values = Object.values(book);
  console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

Масив значень властивостей також можна перебрати циклом for...of, наприклад для отримання загальної суми числових значень.

//--------------------------------------------------------


//& 4. Масив однотипних об'єктів; Як працювати з ним?

//*Масив об’єктів - використовується для опису групи сутностей так як Об'єкти дозволяють згрупувати описові характеристики сутності, наприклад, користувача, книги, автомобіля, шоколадного батончика тощо.
Біблотека — це колекція книг, тобто масив об’єктів.

const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    }
  ];
  
//*Маніпуляція масивом однотипних об'єктів -ще означає, що всі об'єкти в масиві гарантовано матимуть однаковий набір властивостей, але з різними значеннями.
-- Для перебору такого масиву використовується стандартний цикл for...of.
---Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку», оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізнятимуться тільки значення.
for (const book of books) {
    console.log(book); // Об'єкт книги
    console.log(book.title); // Назва
    console.log(book.author); // Автор
    console.log(book.rating); // Рейтинг
  }


//*Пошук об'єкта за значенням властивості
Наприклад, потрібно знайти книгу за її автором. Для цього необхідно:
1) перебрати масив у циклі;
2) додати умову, виконання якої означатиме успішний результат пошуку.

  const books = [
    { title: "The Last Kingdom", author: "Bernard Cornwell" },
    { title: "Beside Still Waters", author: "Robert Sheckley" },
    { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
  ];
  
  const authorToSearchFor = "Robert Sheckley";
  for (const book of books) {
      if(book.author === authorToSearchFor) {
          console.log(book);
          console.log(book.title)
          console.log(book.rating)
      }
  }


//*Колекція значень властивості
Типова задача під час роботи з колекцією об'єктів — це отримання масиву всіх значень певної властивості об'єктів. 
Наприклад, взяти з масиву об'єктів, які описують книги, усі назви або рейтинг.

Для цього необхідно:
1) Створити новий порожній масив для зберігання значень властивостей.
2) Перебрати масив об'єктів у циклі.
3)На кожній ітерації додати в новий масив значення необхідної властивості.

Приклад 1. отримаємо список назв усіх книг у колекції books.
const books = [
    { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
    { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
    { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
  ];
  const titles = [];
  for (const book of books) {
      titles.push(book.title)
  }
  console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]



Приклад 2. Дізнаємося середній рейтинг усієї нашої колекції. Для цього треба скласти всі рейтинги й розділити отримане значення на кількість книг.
const books = [
    { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
    { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
    { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
  ];
  let totalRating = 0;
  for (const book of books) {
    totalRating += book.rating;
  }
  const averageRating = totalRating / books.length;
  console.log(averageRating); // 8


  //---------------------------------------------------------------

//& 5. Як звертатися до властивості об'єкта в його методах (блок 4)?

//*Методи об'єкта
Об'єкти можуть зберігати не тільки дані, але й функції для роботи з цими даними. 
Якщо значення властивості — це функція, така властивість називається методом об'єкта.
const obj = {
	method(value) {
		console.log(`I'm a method with ${value}!`);
	}
};
obj.method(5); // "I'm a method with 5!"
obj.method(10); // "I'm a method with 10!"
   - Метод — це звичайна функція, оголошена як властивість об'єкта (див. приклад вище), а не як окрема змінна (див. перший приклад у розділі).
   - Для звернення до методу об'єкта використовується стандартний синтаксис із крапкою.

Об'єкти, які пов'язують дані та методи для роботи з цими даними, можна назвати «моделями».

   Створимо об’єкт bookShelf для колекції книг books і методів взаємодії з колекцією getBooks і addBook.
   // ✅ Логічно й синтаксично згруповані сутності
const bookShelf = {
    books: ["The Last Kingdom", "Dream Guardian"],
    // Це метод об'єкта
    getBooks() {
      return "Returning all books";
    },
    // Це метод об'єкта
    addBook(bookName) {
          return `Adding book ${bookName}`;
    },
  };
  
  // Виклики методів
  bookShelf.getBooks(); // поверне "Returning all books"
  bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
  bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"



//*Доступ до властивостей об'єкта
Для доступу до об'єкта в методі використовується не ім'я змінної цього об’єкта, наприклад bookShelf, а ключове слово this.
Ключове слово this — це контекст виконання функції.
const bookShelf = {
    books: ["The Last Kingdom", "The Mist"],
    getBooks() {
      console.log(this);
    },
  };
  
  bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}
//!Значенням this буде посилання на об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, у нашому випадку — це посилання на об'єкт bookShelf.




//*Зміна за посиланням
ми можемо змінювати масив за посиланням, звертаючись до властивості bookShelf.books, тому що це посилання на масив.
const bookShelf = {
    books: ["The Last Kingdom"],
  };
  
  bookShelf.books.push("The Mist");
  console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]

  

  //*Масив об’єктів
  найчастіше будемо працювати з масивом об'єктів. Для цього зберігатимемо у властивості books не рядки, а об'єкти з назвою книги та рейтингом, а в майбутньому, можливо, й іншими характеристиками.
  const bookShelf = {
    books: [
          { title: "The Last Kingdom", rating: 8 }, 
          { title: "The Mist", rating: 6 }
      ],
      getBooks() {
          return this.books;
      }
  };

  Тепер метод getBooks повертатиме масив об'єктів. А метод addBook очікує в параметрі не рядок, а об'єкт книги і додає його в масив у властивості books.
  const bookShelf = {
    books: [
          { title: "The Last Kingdom", rating: 8 }, 
          { title: "The Mist", rating: 6 }
      ],
    getBooks() {
      return this.books;
    },
    addBook(newBook) {
      this.books.push(newBook);
    }
  };
  
  bookShelf.addBook({ title: "Dream Guardian", rating: 9 });

  При переборі масиву у властивості books треба пам'ятати, що це масив об'єктів.

  Наприклад, додамо метод getAverageRating(), який повертатиме середній рейтинг книг. Для цього:
      Оголосимо новий метод getAvarageRating в об'єкті.
      Оголосимо змінну totalRating для зберігання загального рейтингу.
      Переберемо масив книг за посиланням this.books у циклі for...of.
      На кожній ітерації додамо до загального рейтингу - рейтинг книги.
      Після завершення циклу повернемо результат ділення загального рейтингу на кількість книг.  

      const bookShelf = {
        books: [
          { title: "The Last Kingdom", rating: 8 },
          { title: "The Mist", rating: 6 },
        ],
        getAvarageRating() {
          let totalRating = 0;
      
          for (const book of this.books) {
            totalRating += book.rating;
          }
      
          return totalRating / this.books.length;
        },
      };
      
      bookShelf.getAvarageRating(); // 7

      
//*Зміна об'єкта в масиві
Метод changeRating очікує на назву книги, якій необхідно змінити рейтинг, і нове значення рейтингу, яке потрібно підмінити в об'єкті. Процес зміни властивостей об’єкта в масиві починається з таких кроків:

  -Перебір масиву об'єктів у циклі, наприклад for...of.
  -Додавання перевірки збігу значення властивості об'єкта на поточній ітерації і заданого значення.

  const bookShelf = {
    books: [
      { title: "The Last Kingdom", rating: 8 },
      { title: "The Mist", rating: 6 },
    ],
      changeRating(bookName, newRating) {
          for(const book of this.books) {
              if(book.title === bookName) {
                  // Знайшли необхідний об’єкт за назвою книги
              }
          }
      }
  };
Після виклику методу changeRating властивість rating об'єкта з назвою, що збігається з bookName, буде оновлено на newRating.


//---------------------------------------------------------------------------------

//& 6. використовувати сучасний синтаксис spread і rest та розуміти його функціонал.

//*Синтаксис spread і rest

//*Залишкові параметри
У прикладі нижче проблема в тому, що аргументів більше, ніж параметрів. І будуть використані лише перші два аргументи — за кількістю оголошених параметрів.
function multiply(a, b) {
	console.log(a, b)
}

multiply(1, 2); // 1 2
multiply(1, 2, 3); // 1 2
multiply(1, 2, 3, 4); // 1 2

//^Ми вже вміємо розв'язувати такі завдання, використовуючи псевдомасив arguments, у який збираються всі передані аргументи.
function multiply() {
	console.log(arguments)
}
multiply(1, 2); // псевдомасив [1, 2]
multiply(1, 2, 3); // псевдомасив [1, 2, 3]
multiply(1, 2, 3, 4); // псевдомасив [1, 2, 3, 4]



//^ (...rest) - це спеціальний синтаксис, який дозволяє зібрати групу незалежних елементів(аргументів) у масив.
function multiply(...args) {
    console.log(args);
  }
  multiply(1, 2); // [1, 2]
  multiply(1, 2, 3); // [1, 2, 3]
  multiply(1, 2, 3, 4); // [1, 2, 3, 4]
*Вільні параметри можуть бути позначені через три крапки .... Буквально це означає: "збери параметри, що залишилися, і поклади їх у масив". Ім'я параметра може бути довільним. Найчастіше його називають args або rest.

//*Збір частини аргументів
//^Операція (...rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна. Для цього потрібно оголосити параметри до «збирання».
Можна покласти перші кілька параметрів у змінні, а решту — зібрати в масив.
function multiply(first, second, ...args) {
    console.log(first, second, args);
  }
  
  multiply(1, 2); // 1 2
  multiply(1, 2, 3); // 1 2 [3] 
  multiply(1, 2, 3, 4); // 1 2 [3, 4]
//!Операція rest збирає решту всіх аргументів, а тому повинна завжди бути останньою в підписі функції, інакше виникне помилка SyntaxError: Rest parameter must be last formal parameter.


//*Входження параметрів
 //^оператор розпилення ...spread - перетворює масив на список аргументів.
 const temps = [14, -4, 25, 8, 11];
console.log(...temps); // 14 -4 25 8 11  набір окремих чисел 
// ✅ Передамо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25
