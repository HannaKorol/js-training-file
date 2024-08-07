//*JSON (JavaScript Object Notation) — сучасний текстовий формат зберігання й передачі структурованих даних у текстовій формі. Саме в цьому форматі дані будуть приходити і відправлятися на сервер, зберігатися в локальному сховищі тощо.
//Синтаксис схожий на об'єкт, за винятком того, що:
// - Ключі — це завжди рядки, обов'язково в подвійних лапках.
//- Значення рядків — також обов'язково в подвійних лапках.
// - Числа можуть бути цілими або десятковими, з десятковою крапкою або без неї, включаючи негативні.
// - Числа та булеві значення true і false записуються так само, як у JavaScript.
//! У JSON немає коми після останньої властивості об'єкта.
// - Значення властивостей може бути спеціальним значенням null, але не може бути undefined.
// - Функції не можна зберігати у JSON, оскільки JSON передбачений лише для даних, а не для методів обробки даних.

//*Метод JSON.stringify(value) приймає значення і перетворює його у JSON. Значенням може бути число, буль, null, масив, об'єкт. 
//Рядки — це вже валідний JSON, тому в їх перетворенні немає сенсу.
//Результат виклику JSON.stringify — це валідний JSON (рядок), який може бути збережений у вебсховище, базу даних або переданий мережею на сервер.
const dog = {
    name: "Mango",
    age: 3,
    isGoodBoy: true,};

const json = JSON.stringify(dog);
  console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'


  //Перетворення функцій
  //!якщо в об'єкта є методи, то при перетворенні вони будуть проігноровані та не потраплять у JSON.
//!При перетворені функції у JSON результатом буде undefined.


//*Метод JSON.parse(value) приймає json, тобто рядок, і перетворює його у JavaScript дані. 
console.log(JSON.parse("5")); // 5
console.log(JSON.parse("false")); // false
console.log(JSON.parse("null")); // null
//Якщо json описує складний тип даних, наприклад об'єкт, то в результаті отримаємо валідний об'єкт, з яким можна працювати звичайним чином.
//Рядок із символами — це невалідний JSON, адже він не може бути перетворений у валідне JavaScript значення.
//Якщо методу JSON.parse передати невалідний JSON, він згенерує помилку. Як результат, увесь скрипт впаде, тобто припинить своє виконання, і весь код після місця помилки не виконається.
//*Для уникнення помилки при перетверені на JSON використовується конструкція try...catch, яка дозволяє «ловити» й обробляти помилки виконання скрипта.
try {
    // Code that may throw a runtime error
  } catch (error) {
    // Error handling
  }
// 1. Спочатку виконується код всередині блоку try.
// 2. Якщо помилки відсутні, блок catch ігнорується й управління передається далі.
// 3. Якщо в блоці try сталася помилка, його виконання зупиняється та інтерпретатор переходить до блоку catch.

//Використовуючи конструкцію try...catch, можна обробити цей виняток таким чином, щоб скрипт за межами цієї конструкції продовжив працювати, навіть у разі помилки.
try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}
console.log("✅ This is fine, we handled parsing error in try...catch");

//*Змінна error — це об'єкт помилки з інформацією про те, що сталося.

/* У цього об'єкта є кілька корисних властивостей:
    name — тип помилки. Для помилки парсингу — це SyntaxError.
    message — повідомлення про деталі помилки.
    stack — стек викликів функцій на момент помилки. Використовується для налагодження */.
//*Конструкція try...catch ловить тільки помилки, які виникли під час виконання коду (runtime errors). Це означає, що код має бути синтаксично правильним, інакше фаза виконання просто не запуститься. Помилки, які виникають під час фази оцінювання, називаються помилками парсингу.

//Сookie розв'язують проблему збереження інформації на стороні користувача під час взаємодії з вебсайтами. Однак їхні можливості обмежуються зберіганням даних розміром лише до кількох кілобайт. З ростом складності клієнтських програм виникла потреба зберігати більш об'ємні та складні дані прямо у браузері.
//Web Storage API 
//Вебсховище — це механізм у веббраузерах, який дозволяє вебдодаткам зберігати та отримувати дані на стороні клієнта, тобто на комп'ютері користувача.
//Вебсховище не зберігає паролі, номери банківських карт та іншу конфіденційну інформацію. Якщо шкідливий скрипт отримає доступ до вебсторінки, він без проблем зможе прочитати ці дані.
//Вебсховище складається з локального сховища та сховища сеансів.

// Локальне сховище (Local Storage): унікальне для кожного вебдодатку і буде однаковим на кількох вкладках, де вебдодаток відкритий. Дані в локальному сховищі не видаляються, навіть після закриття браузера або вимкнення комп'ютера. Щоб їх видалити, потрібно використовувати JavaScript. Доступ до даних у локальному сховищі можливий з будь-якої вкладки або вікна браузера, пов'язаної з доменом, який створив дані.Локальне сховище може зберігати дані розміром від 5 Мб до 10 Мб. Точний обсяг пам’яті залежить від реалізації кожного браузера, але це значно більше, ніж 4 Кб пам’яті, яку пропонують cookie.
//Доступ до локального сховища можна отримати в об’єкті window:
console.log(window.localStorage); // Storage {length: 0}

//*Давай додамо пару ключ-значення до локального сховища за допомогою методу setItem(key, value), доступного в об’єкті localStorage:
localStorage.setItem("ui-theme", "light");
//Це встановить новий запис у сховищі з ключем "ui-theme" і значенням "light". Якщо ти просто викличеш об’єкт localStorage зараз, то побачиш збережені дані.
console.log(localStorage); // Storage {ui-theme: "light", length: 1}
//!А що як у сховищі вже існував запис із ключем "ui-theme"? Виклик методу setItem(key, value) перезапише його значення.

//!У вебсховище не записують методи об'єктів або функції, тільки дані, які підтримує JSON формат.
//*Якщо необхідно зберегти щось, окрім рядка, наприклад, масив або об'єкт, необхідно перетворити їх у рядок методом JSON.stringify().
//*Метод getItem(key) дозволяє зчитати зі сховища запис із ключем key і повертає його значення у JSON форматі.
const savedTheme = localStorage.getItem("ui-theme"); 
console.log(savedTheme); // "light"
//Якщо у сховищі відсутній запис з таким ключем, метод повертає null.
//якщо це масив або об'єкт, необхідно розпарсити значення методом JSON.parse(), щоб отримати валідні дані.


//*Метод removeItem(key) видаляє зі сховища існуючий запис з ключем key. В результаті своєї роботи він не повертає значення.
localStorage.setItem("ui-theme", "dark");
console.log(localStorage.getItem("ui-theme")); // "dark"

localStorage.removeItem("ui-theme");
console.log(localStorage.getItem("ui-theme")); // null



//*Якщо ти хочеш повністю очистити сховище, потрібно викликати метод clear().
localStorage.clear();
console.log(localStorage); // Storage {length: 0}
//!Операція повного очищення сховища є ризикованою. Вона може порушити записи, створені іншими розробниками проєкту. Краще видаляти лише ті записи, які дійсно не потрібні, не покладаючись на повну очистку даних сховища.

//Наприклад, зміна теми кольорів між світлою і темною, перегляд відео, додавання товару в кошик, відкривання або закривання сайдбара, бажаний спосіб оплати користувача, адреси доставки за замовчуванням тощо, увесь цей стан інтерфейсу можливо зберегти і в наступному відвідуванні відновити його.





// Сховище сесії (Session Storage): на відміну від локального сховища, дані у сховищі сесії зберігаються лише протягом одної сесії браузера. Якщо користувач закриє вкладку або браузер, дані будуть видалені. Сховище сесії зручне для зберігання тимчасових даних або станів, які не повинні зберігатися довгий час.
//Набір методів та їхній функціонал ідентичні методам роботи з локальним сховищем.
//Єдиний виняток — звертаємося до них через об'єкт sessionStorage, а не localStorage.
console.log(window.sessionStorage); // Storage {length: 0}

//*Методом setItem(key, value) можна записувати як рядки, так і складні типи даних.
//*Методом getItem(key) можна читати записи, використовуючи збережений ключ.
//*І звісно, видаляти елементи за ключем і очищати сховище цілком методами removeItem(key) і clear() відповідно.
sessionStorage.removeItem("tickets");
console.log(sessionStorage); // Storage {user-id: '123', length: 1}

sessionStorage.clear();
console.log(sessionStorage); // Storage {length: 0}

//Оскільки дані в сховищі сеансу зберігаються лише на вкладці браузера, існує кілька унікальних випадків використання сховища сеансу.
//Зберігання сеансів можна використовувати в багатоетапних процесах: бронювання авіаквитків, готелів, квитків у кіно, поїздів тощо. Можна зберігати деталі попередніх кроків у сховищі сеансу браузера, щоб попередньо заповнити ці форми або введені дані.
//Ще одним прикладом можуть бути вебсайти для ведення блогів, інформаційні бюлетені, навчальні вебсайти тощо. Такі сторінки мають безліч відвідувачів, які читають вміст, не створюючи облікового запису. У таких сценаріях можна попросити відвідувача створити обліковий запис. Щоразу, коли він чи вона читає допис у блозі чи статтю на іншій вкладці. Це може бути чудовим способом запропонувати своїм користувачам неблокуючий досвід і водночас ефективно перетворити їх на зареєстрованих користувачів.

//----------------------------------------------------------------------------------------------------------------------

//*Модульність коду

//*ECMAScript Modules (ESM)-сучасний стандарт системи модулів JavaScript, який відповідає за організацію та уніфікований підхід до імпорту та експорту даних між різними файлами в проєкті.

//Модуль — це JavaScript-файл із фрагментом коду, який можна використовувати багато разів. Модуль експортує певні об'єкти, зробивши їх доступними для інших модулів.
//Кожен JavaScript-файл зберігає код в унікальному контексті модуля, імпортує необхідні йому залежності та експортує все, що інші модулі можуть імпортувати.

в одному модулі може бути лише один експорт за замовчуванням (default export). Це значення вважається "головним" значенням модуля, коли його імпортують в інші частини коду.
//-----------------------------------------------------------------------------------------------------------------------------

//  1. Операція експорту за замовчуванням реалізована конструкцією export default.

** ----export default exportedValue----*

Де:

    export default — ключова фраза для експорту;
    exportedValue — значення, яке експортується.

Ось так виглядає синтаксис для експорту значення за замовчуванням.

const makeMessage = username => {
return `Welcome, ${username}!`;
};
export default makeMessage;

Використання експорту за замовчуванням зручне, коли тобі потрібно експортувати одне головне значення з модуля, наприклад, основну функцію або об'єкт.

Вибери правильний синтаксис експорту за замовчуванням для змінної username:
- export default username

//-----------------------------------------------------------------------------------------------------------------------------

                  2. Операція імпорту за замовчуванням реалізована конструкцією import.

** ----import anyName from "..."----**

Де:

    import і from — ключові фрази для імпорту;
    name — локальна змінна, в яку імпортується значення;
    **"..."** — відносний шлях до файлу модуля у вигляді рядка.

У будь-якому іншому файлі проєкту можна імпортувати значення за замовчуванням.

import makeMessage from "./makeMessage";
console.log(makeMessage("Jacob")); // "Welcom, Jacob!"

*! Iм'я, з яким імпортується значення за замовчуванням, може бути вибрано довільним чином.

//-----------------------------------------------------------------------------------------------------------------------------

Іменований експорт (named export) — це спосіб експортування одного або кількох значень з модуля під конкретними іменами.

За допомогою іменованого експорту можна отримати доступ до будь-якого значення: змінної, функції або об'єкта тощо під певним ім'ям.
Пізніше ці значення можна імпортувати в іншому файлі за допомогою цього самого імені.

//-----------------------------------------------------------------------------------------------------------------------------

3. Операція іменованого експорту реалізована конструкцією з export.
** ----export exportedValue----**

Де:

    export — ключове слово для експорту;
    exportedValue — значення, яке експортується.

Ось так виглядає синтаксис для іменованого експорту.

export const makeMessage = username => {
	return `Welcome, ${username}!`;
};

export const levels = ["easy", "medium", "hard"];

!Зверни увагу! Кількість іменованих експортів в одному модулі не обмежена, на відміну від експорту за замовчуванням, який може бути тільки один.

//-----------------------------------------------------------------------------------------------------------------------------

4. Операція іменованого імпорту реалізована конструкцією з import.

** ----import { name } from "..."----**

Де:

    import — вказує на суть операції;
    from — на шлях до модуля з імпортованою сутністю;
    name — ім'я змінної, яке повинно збігатися з іменем експорту в модулі;
    "..." — шлях до файлу модуля у вигляді рядка.

У будь-якому іншому файлі проєкту можна імпортувати конкретні елементи з іншого файлу (модуля), використовуючи їх імена в конструкції іменованого імпорту.

import { makeMessage, levels } from "./makeMessage";

console.log(makeMessage("Jacob")); // "Welcom, Jacob!"
console.log(levels); // ["easy", "medium", "hard"]

при імпорті ми вказуємо конкретні імена, які були використані при експорті. Це дозволяє точно вказати, які значення ми хочемо імпортувати з модуля.

!!! іменований експорт імпортуємо тільки за допомогою іменованих імпортів.


//-----------------------------------------------------------------------------------------------------------------------------

Rename export — це техніка, яка дозволяє імпортувати іменовані експортовані змінні, функції тощо з одного модуля до іншого, змінюючи їм ім’я під час імпорту.

Щоб задати нове ім'я під час імпорту з іншого модуля, використовується ключове слово as.

** ----import { name as newName } from '...'----**

Наприклад:

// Module myModule.js
export const original = "Hello, World!";

// Your current module, for example app.js
import { original as renamed } from './myModule.js';

console.log(renamed); // "Hello, World!"

У цьому прикладі ми імпортуємо змінну original з іншого модуля як renamed у нашому поточному модулі. Тепер ми можемо використовувати renamed у нашому коді, і воно буде посилатися на значення, яке експортується з original.

Коли використовувати перейменування? 
У бібліотеках або в інших модулях імена можуть бути довгими, 
досить загальними або конфліктувати з іменами змінних у твоєму поточному 
модулі. У цих випадках доцільно використовувати перейменування для зручності 
та уникнення конфліктів.


//-----------------------------------------------------------------------------------------------------------------------------

Імпорт простору імен (namespace import) — це техніка імпортування всього вмісту модуля як об'єкта з іменем, що представляє простір імен цього модуля. Це означає, що всі іменовані експорти з модуля стають властивостями цього об'єкта. Це зручно, коли потрібно імпортувати багато різних функцій, змінних або класів з модуля, не обираючи їх по одному.

синтаксис імпорту простору імен усіх експортів модуля в об'єкт з ім'ям everything:
** ----import * as everything from "..."----**  
 
Наприклад:
// Module user.js
export const name = "Mango";
export const age = 26;
export const email = "mango@mail.com";

// Your current module
import * as user from './myModule.js';
console.log(user.name); // "Mango"
console.log(user.age); // 26
console.log(user.email ); // "mango@mail.com"

У цьому прикладі ми імпортуємо всі іменовані експорти з модуля user.js 
як об'єкт user. Усі іменовані експорти стають властивостями цього об'єкта. 
В результаті ми можемо звертатися до них через крапку.








//Інструменти веброзробки
//*Vite (https://vitejs.dev/) (французьке слово, що означає «швидкий», вимовляється [vit], як «veet») — це інструмент збірки проєкту для розробки вебдодатків на базі JavaScript.
//*Node.js — легке та ефективне середовище виконання JavaScript поза браузером








// Підсумок модулю 9
//JSON (JavaScript Object Notation)
//*Метод JSON.stringify(value) приймає значення і перетворює його у JSON. Значенням може бути число, буль, null, масив, об'єкт. 
//*Метод JSON.parse(value) приймає json, тобто рядок, і перетворює його у JavaScript дані. 
//*Конструкція try...catch ловить тільки помилки, які виникли під час виконання коду (runtime errors). Це означає, що код має бути синтаксично правильним, інакше фаза виконання просто не запуститься. Помилки, які виникають під час фази оцінювання, називаються помилками парсингу.


// Локальне сховище (Local Storage)
//*звертаємося до них через об'єкт localStorage
//*Метод localStorage.setItem(key, value) встановлює новий запис у сховищі. Метод localStorage.setItem приймає два аргументи: ключ і значення для зберігання.
//*Якщо ключ "userData" вже існує в localStorage, то виклик localStorage.setItem("userData", "new_data"); оновить значення для цього ключа на "new_data".
//*Для отримання значення з localStorage за ключем "username" слід використовувати метод localStorage.getItem("username")
//*метод localStorage.getItem("key")повертає null, якщо ключ "key" не існує в localStorage.
//*Локальне сховище зберігає всі дані у форматі рядка, тому виклик localStorage.getItem("age") поверне рядок.
//*Метод localStorage.removeItem приймає аргументом ключ елемента, який потрібно видалити з localStorage.
//*Для очищення всіх даних у localStorage використовується метод localStorage.clear(). 

//Сховище сесії
//*звертаємося до них через об'єкт sessionStorage
//*Методом setItem(key, value) можна записувати як рядки, так і складні типи даних.
//*Методом getItem(key) можна читати записи, використовуючи збережений ключ.
//*І звісно, видаляти елементи за ключем і очищати сховище цілком методами removeItem(key) і clear() відповідно.






//------------------------------------------------------------------------------------------------------

//Практика по уроку 1  модулю 9 - local storage

/**
 * LocalStorage
 */
const LS_KEY = "Array of names"; 
const names = ["Alice", "Kate", "Emma"];

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

// localStorage.setItem("user id", "1")
//*localStorage.setItem(key, value) - записує дані (value) в локальний сховок по ключу key

//* JSON.stringify(value) - бере значення value і намагається перетворити його на JSON формат
localStorage.setItem(LS_KEY, JSON.stringify(names));

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

//* localStorage.getItem(key) - зчитати дані які записані в локальному сховку по ключу key
// console.log(localStorage.getItem("smth")); // якщо ми хочемо зчитати дані по неіснуючому ключу - ми отримаємо null

const namesFromLS = localStorage.getItem(LS_KEY);

console.log(namesFromLS);
console.log(JSON.parse(namesFromLS));
// * JSON.parse(validJSON) - приймає валідний JSON та перетворює його на валідний JS обʼєкт(масив)

console.log("Починаємо парсинг не валідного ДЖСОН");

/*
JS
{
  user: "Alex",
  age: 20,
  stack: ["html", "css", "js", "react"],
  isOnline: true
}

JSON
'{
  "user": "Alex",
  "age": 20,
  "stack": ["html", "css", "js", "react"],
  "isOnline": true
}'

*/
try {
    // блок try, у якому ви описуєте код який потенційно може викинути помилку (але не синтаксичну помилку типу неправильного запису"co..st")
    console.log(JSON.parse('{ "name": "Alex" }')); // це JSON об"єт
    console.log(JSON.parse('["Alex", "Rick"]')); // це JSON масив
    console.log(JSON.parse("sdfsdfsdf")); // це не JSON, просто якийсь незрозумілий рядок з яким потім не можливо працювати
  } catch (err) {
    // блок catch, його задача - зловити помилку яка виникла в блоці try та обробити її
    console.log("ERROR:", err); // показує чого виникла помидка-причина цього
  }
  
  console.log("Закінчуємо парсинг не валідного ДЖСОН");

  /**
 * Видалення
 */
//* localStorage.removeItem(key) - приймає ключ та видаляє всю інформацію зі сховища по цьому ключу key

localStorage.removeItem(LS_KEY); // можна видалити тільки один ключ за раз 

/**
 * LocalStorage не може зберігати функції - цього і не потрібно пробити адже JSON передає данні а не функції
 */

function add(a, b) {
    return a + b;
  }
  
  localStorage.setItem("my function", JSON.stringify(add)); // undefined
  console.log(localStorage.getItem("my function")); // undefined
  
  const calculator = {
    a: 5,
    b: 10,
    add() {
      return this.a + this.b;
    },
  };
  
  /*
  JSON.stringify(calculator) ->
  '{
    "a": 5,
    "b": 10
  }'
  */
  
  localStorage.setItem("calculator", JSON.stringify(calculator)); // записуємо дані (value) в локальний сховок по ключу key
  
  console.log(localStorage.getItem("calculator")); // отримання в JSON форматі
  
  console.log(JSON.parse(localStorage.getItem("calculator"))); //отримання в JS форматі


  //----------------------------------------------------------------------------------------------------
  // Практика 2 уроку 1 по модулю 9

  const STORAGE_KEY = "feedback-form";
  const form = document.querySelector(".feedback-form"); //отримаємо форму з html 

  populateForm();

form.addEventListener("submit", handleFormSubmit);
form.addEventListener("input", handleFormInput); //вішаєсо обробник подій на input

/*
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */


function handleFormSubmit(event) {
    event.preventDefault();
  
    localStorage.removeItem(STORAGE_KEY);
  
    event.currentTarget.reset();
  }
  
  /*
   * - Отримуємо значення поля - input
   * - Зберігаємо його у сховище
   */
  
  function handleFormInput(event) {
    const value = event.target.value; // збереження данних яке було ведено в полі input
    const key = event.target.name; // 
  
    let savedFeedbackData = {};
  
    try {
      savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (err) {
      console.log(err);
      return;
    }



    /*
  - Отримуємо значення зі сховища
 - Якщо там щось було, оновлюємо DOM
 */













//--------------------------------------------------------------------
//Домашнє завдання по модулю 9

 
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

populateTextArea (); // викликаєсо функцію для отримання значення зі сховища

textarea.addEventListener("input", handleTextAreaInput)

const formData = {
    email: "", 
    message: "",
};

/*
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */

function handleFormSubmit(event){
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
}



/*
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */

function handleTextAreaInput(event){
const value = event.target.value;
localStorage.setItem(STORAGE_KEY, value)
};


/*
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */

function populateTextArea () {
 const savedMassage = localStorage.getItem(STORAGE_KEY);

if(savedMassage){
    textarea.value = savedMassage;
}
} 















getItem(key): Це метод об'єкта localStorage, який повертає значення, збережене за вказаним ключем. Якщо ключ не існує, метод повертає null.

























/* const inputEl = form.querySelector("input"); // Отримаємо посилання на елемент форми з ім'ям 'email' (input)
 */
/* const textarea = form.querySelector("textarea"); // Отримаємо посилання на textarea - message */

populateTextArea (); // викликаємо функцію для отримання значення зі сховища

textarea.addEventListener("input", handleTextAreaInput)
form.addEventListener  



/* коли користувач відправляє форму
 * - Скасовуємо стандартну поведінку = priventDefault;
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму //не потрібно зберігати данні так як вони вже відправленні
 */

function handleFormSubmit(event){
    event.preventDefault(); //запобігаємо перезавантаження форми
    localStorage.removeItem(STORAGE_KEY); // для видалення елемента з локального сховища браузера (localStorage), де STORAGE_KEY — це ключ, за яким зберігався елемент.
    event.currentTarget.reset();// очищення форми після відправлення форми
}



/* після перезавантаження сторінки
 * - Отримуємо значення поля textarea (функція викликається зверху - textarea.addEventListener("input", handleTextAreaInput))
 * - Зберігаємо його у сховище
 */
function handleTextAreaInput(event){
const value = event.target.value;
localStorage.setItem(STORAGE_KEY, value) // зберігаємо данні у локар сторедж
};


/*
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */

function populateTextArea () {
const savedMassage = localStorage.getItem(STORAGE_KEY);

// Якщо в ЛС існує таке значення, то записуємо його в текстове поле
if(savedMassage){
textarea.value = savedMassage;
}
} 