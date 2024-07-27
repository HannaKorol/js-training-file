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



