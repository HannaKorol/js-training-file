'use strict';
//*Масив — 
//Це впорядкована колекція елементів, де кожен елемент має свій порядковий номер, який називається індексом. Перший індекс 0.
const mixed = ['apple', 10, true]; // масив з елементами різних типів

//Щоб отримати доступ до значення елемента масиву, ми використовуємо синтаксис квадратних дужок:
//Між іменем змінної, яка зберігає масив, і квадратними дужками не повинно бути пробілу. Вказуємо індекс елемента всередині квадратних дужок.
const planets = ['Earth', 'Mars', 'Venus'];
console.log(planets[0]); // 'Earth'
console.log(planets[1]); // 'Mars'
console.log(planets[2]); // 'Venus'

//Результат звернення до елемента масиву можна зберегти у змінну і використовувати його надалі.
const firstElement = planets[0];
console.log(firstElement); // 'Earth'

//Спроба доступу до неіснуючого індексу поверне значення undefined.
console.log(planets[3]); // undefined
console.log(planets[999]); // undefined

//*Перевизначення значення елемента
//Елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши нове значення.
const planetss = ['Earth', 'Mars', 'Venus', 'Uranus'];
planetss[0] = 'Jupiter';
planetss[2] = 'Neptune';
planetss[3] = 'Venera'
console.log(planetss); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

//!Важливо розуміти, що ми не змінили саму змінну planets, 
//!вона, як і раніше, містить масив. Ми просто змінили значення всередині цього масиву.

//*Довжина масиву
console.log(planets.length); // 3
//У цьому прикладі в нас є масив planets із трьома елементами. 
//Вираз planets.length поверне значення 3, оскільки в масиві міститься три елементи.
const planetes = ['Earth', 'Mars', 'Venus'];
if(planetes.length >= 3) {
	console.log("3 or more elements");
} else {
	console.log("3 or less elements");
}

//*Індекс останнього елемента
//Індекс останнього елемента можна визначити за допомогою формули довжина_масиву -1
const lastElementIndex = planets.length - 1;
console.log(planets[lastElementIndex]); // "Venus"

//*Присвоєння за посиланням і за значенням

//&Примітиви: рядки, числа, буль, null і undefined, під час присвоювання копіюються цілком, за значенням (by value).
//&складними типами - вони передаються за посиланням (by reference).

//Масиви (складний тип) присвоюються за посиланням, тобто змінна просто отримує посилання (покажчик у пам'яті) на вже існуючий масив.
const a = ["Mango", "Poly"];
const b = a;
console.log(a); // ["Mango", "Poly"]
console.log(b); // ["Mango", "Poly"]
//Оскільки a це масив, у b записується посилання на вже наявний у пам'яті масив. Тепер a і b вказують на один і той самий масив.

const g = ["Mango", "Poly"];
const v = g;
console.log(g); // ["Mango", "Poly"]
console.log(v); // ["Mango", "Poly"]

a[1] = "Jacob";
console.log(g); // ["Mango", "Jacob"]
console.log(v); // ["Mango", "Jacob"]

//!Два масиви ніколи не дорівнюють один одному, навіть якщо вони порожні або в них однакові елементи.
const arrr1 = [1, 2, 3];
const arrr2 = [1, 2, 3];

console.log(arrr1 === arrr2); // false
console.log([] === []); // false

//
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr1[1] = 1;
arr2[2] = 1;


//*Приведення типів: масиви

//Масив → Рядок
const array = [1, true, "Poly"];
console.log(String(array));// "1,true,Poly"
console.log(array + "5"); // "1,true,Poly5"

//Масив → Число
//Наприклад, порожній масив приводиться до порожнього рядка, який приводиться до числа 0.
console.log(Number([])); // 0
console.log(Number([1])); // 1
console.log(Number([1, 2, 3])); // NaN

//Масив → Логічне значення (буль)
//!При перетворенні масиву в логічне значення будь-який масив, навіть порожній, перетворюється на true.

//__________________________________________________________________________________________________________
//*Методи масиву

// 1.Метод join()
//Метод масиву join(delimiter) дозволяє об'єднати елементи масиву в рядок.
//У результуючому рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.

//Наприклад, нам потрібно написати функцію, 
//яка перетворює рядки зі snake_case (зміїної нотації з підкресленнями) в kebab-case (нотацію з тире).
const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("-")); // 'JavaScript-is-amazing'


//2.Метод split()
//Метод рядків split(delimiter) виконує зворотну операцію порівняно з методом масивів join(delimiter). 
//Він дозволяє перетворити рядок на масив, розбивши його за вказаним роздільником delimiter.
const name = "Mango";
const letters = name.split("");
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
const wordss = message.split(" ");
console.log(wordss); // ["JavaScript", "essentials"]

const slug = "amazing-french-recipes";
const slugParts = slug.split("-");
console.log(slugParts); // ["amazing", "french", "recipes"]

//3.Метод slice()
//Метод масиву slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. 
//Копія створюється від індексу begin до, але не включаючи індекс end.

const planeets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planeets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planeets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planeets.slice(1, 3)); // ['Mars', 'Venus']

//Результат роботи методу slice() можна зберегти у змінну для подальшого використання:
const result = planeets.slice(1, 3);
console.log(result); // ["Mars", "Venus"]

//Якщо не вказати параметри begin і end, буде створено повну копію вихідного масиву

//Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів 
//(тобто стільки елементів з кінця, скільки вказано в параметрі begin)
const pplanets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(pplanets.slice(-2)); // ["Jupiter", "Saturn"]


//Метод slice() корисний, коли необхідно отримати підмасив із вихідного масиву або створити його копію для подальшої роботи з ним.
//Метод масиву slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. 
//!!Копія створюється від індексу begin до, але не включаючи індекс end.
const pllanets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
const ressult = pllanets.slice(1, 3);
console.log(ressult); // ["Mars", "Venus"]


// 5.Метод concat()
//Bикористовується для об'єднання двох або більше масивів.
const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const results = firstArray.concat(secondArray);

console.log(results); // ["Mercury", "Venus", "Mars", "Jupiter"];

//6.Метод indexOf()
//Метод масиву indexOf(elem) використовується для визначення індексу першого входження елемента elem у масиві.
//Він повертає індекс елемента, якщо він знайдений, або -1, якщо елемент не знайдений. 
//Метод indexOf() виконує сувору рівність (===) при порівнянні елементів.
const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1

//7.Метод push()
//Bикористовується для додавання одного або більше елементів у кінець масиву.
const tags = [];
for(let i = 0; i < 3; i += 1) {
	tags.push(`tag-${i}`);
}
console.log(tags); // ["tag-0", "tag-1", "tag-2"]

//

function createArrayOfNumbers(min, max) {
    const array = [];
    for (let i = min; i <= max; i+=1) {
     array.push(i);
    }
    return array;
  };
  
  console.log(createArrayOfNumbers(1, 3)); //  [1, 2, 3]
  console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
  console.log(createArrayOfNumbers(29, 34)); //  [29, 30, 31, 32, 33, 34]
  console.log(createArrayOfNumbers()); // з випадковими min і max повертає правильний масив


  //*Ітерація по масиву
  //7. Ітерація по масиву з використанням циклу for дозволяє перебрати елементи масиву і виконати певну дію для кожного елемента.
function calculateTotalPrice(order) {
    let sum = 0;
    for (let i = 0; i < order.length; i++);
    sum+=order[i];
    return sum; 
    };
    console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
    console.log(calculateTotalPrice([164, 48, 291])); // 503
    console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
    console.log(calculateTotalPrice()); // з випадковим масивом повертає правильне значення


    //^8. Метод масиву includes() використовується для перевірки наявності певного елемента в масиві. Він повертає логічне значення true, якщо елемент знайдено в масиві, і false, якщо елемент відсутній.
    //Синтаксис методу includes() має такий вигляд: 
    array.includes(element)
    де:
        array — це вихідний масив, у якому здійснюється пошук елемента;
        element — це елемент, наявність якого потрібно перевірити.
    
//Приклад 1 використання методу includes():
const planets = ["Earth", "Mars", "Venus"];
console.log(planets.includes("Earth")); // true
console.log(planets.includes("Jupiter")); // false

//Приклад 2 - Метод includes() можна поєднувати з розгалуженнями для перевірки умов. Наприклад, виконати різний код залежно від наявності значення в масиві.
const fruits = ["apple", "banana", "orange"];
if (fruits.includes("banana")) {
  console.log("The array has an element banana");
} else {
  console.log("Array does not contain banana element");
}

  //^9. Цикл for...of - це зручний спосіб перебору масиву. Тіло циклу буде виконуватися на кожному елементі масиву. Це гарна заміна циклу for, якщо не потрібен доступ до лічильника.
  //Синтаксис циклу for...of виглядає так:
  for (const element of array) {
    // тіло циклу
  }
  Де:
    element — це змінна, в яку на кожній ітерації буде записуватися поточний елемент масиву.
    array — це вихідний масив, який ми хочемо перебрати.
//Приклад 1 використання циклу for...of для масиву:
const planets = ["Earth", "Mars", "Venus"];
for (const planet of planets) {
  console.log(planet);
}

//!Цикл for...of завжди перебирає масив від першого і до останнього елемента, задати умову припинення циклу не можна. Якщо необхідно закінчити виконання циклу передчасно, використовується вже знайомий оператор break.


//__________________________________________________________________________________________________________

//*Функції (частина 2)

//& Псевдомасив arguments - за цією змінною можна отримати доступ до  списку всіх аргументів.
//Коли ти викликаєш функцію з аргументами, arguments автоматично створюється всередині цієї функції і заповнюється переданими значеннями аргументів.
function sum(a, b) {
  console.log(arguments);
  return a + b;
}
sum(2, 5);

//Ця колекція схожа на масив, але насправді є псевдомасивом, тобто:
//у неї є деякі властивості масивів, наприклад length;
//у неї є можливість звернутися до елемента за індексом;
//!у неї немає методів для роботи з масивом;
//її можна перебирати за допомогою циклів.


//^ 10. Метод Array.from() - Якщо під час роботи з arguments потрібно використовувати методи масиву, тоді псевдомасив необхідно перетворити на масив, використовуючи метод Array.from(), який створить масив із псевдомасиву.
function foo() {
  // У змінній args буде повноцінний масив з усіх аргументів
  const args = Array.from(arguments);
	return args.join("-");
}
foo(1, 2, 3); // Поверне "1-2-3"


//Параметри за замовчуванням
//Параметр 1: Функції можуть мати параметри зі значеннями за замовчуванням, тобто необов'язкові параметри. Ці значення використовуються в тому випадку, якщо функція викликається без передавання відповідного аргументу для цього параметра. Значенням за замовчуванням може бути будь-який тип даних.
function greet(username = "Guest") {
  console.log(`Hello, ${username}!`);
}
greet("Jacob"); // "Hello, Jacob!"
greet();        // "Hello, Guest!"
//У цьому прикладі функція greet має параметр username, який має значення за замовчуванням "Guest". Якщо аргумент не передано під час виклику функції, буде використано значення "Guest". Якщо передано аргумент, цей аргумент замінить значення за замовчуванням.


//Параметр 1,2,3...:Приклад:
function count(from, to, step = 1) {
  console.log(`from: ${from}, to: ${to}, step: ${step}`);
  for (let i = from; i <= to; i += step) {
  // ... 
  }
}
count(1, 15, 4); // "from: 1, to: 15, step: 4"
count(1, 15); // "from: 1, to: 15, step: 1"

//Функціональний вираз (function expression) — звичайне оголошення змінної, значенням якої буде функція. Це альтернативний спосіб оголошення функції.
//^Синтаксис функціонального виразу (function expression):
const multiply = function (x, y, z) {
  console.log(x * y * z);
};

//^Синтаксис оголошення функції, який ти вже знаєш (function declaration):
function multiply(x, y, z) {
  console.log(x * y * z);
}

//!Різниця в тому, що функціональний вираз (function expression) не можна викликати до місця його створення, тільки після, тому що це буквально оголошення const змінної.
// ❌ Помилка! Не працює виклик до оголошення
multiply(1, 2, 3);
const multiply = function (x, y, z) {
  console.log(x * y * z);
};
// ✅ Працює виклик після оголошення
multiply(4, 5, 6);

//-----------------------------------------------------

//A оголошення функції (function declaration) можна викликати до місця її створення в коді.
// ✅ Працює виклик перед оголошенням
multiply(1, 2, 3);
function multiply(x, y, z) {
  console.log(x * y * z);
}
// ✅ Працює виклик після оголошення
multiply(4, 5, 6);


//*Область видимості
//необхідно намагатися не змішувати оголошення функції (function declaration) з функціональними виразами (function expression), щоб писати більш стандартизований зрозумілий код.
//Область видимості (scope) — механізм, який визначає доступність змінних у коді, що виконується.
//Ланцюжок областей видимості (scope chain) — області видимості утворюють ієрархію, так що дочірні області мають доступ до змінних із батьківських областей, але не навпаки.
Змінна видима для виконуваного коду, якщо вона є: в поточній області видимості або в ланцюжку областей видимості.

//^Глобальна область видимості: Змінні, оголошені на найвищому рівні, тобто поза будь-якими конструкціями наприклад: if, for і функцій — перебувають у глобальній області видимості і доступні скрізь після їхнього оголошення.
const globalValue = 10;
console.log(globalValue); // 10

function foo() {
  console.log(globalValue); // 10
}

for (let i = 0; i < 5; i+=1) {
  console.log(globalValue); // 10

  if (i === 2) {
    console.log(globalValue); // 10
  }
}

//^Блокова область видомості: Змінні, оголошені всередині інструкційif, for, функцій та інших блоків коду, що огорнуті фігурними дужками {}, перебувають у блоковій області видимості та доступні тільки всередині цього блоку коду або вкладених у нього.
function foo() {
  const a = 20;
  console.log(a); // 20

  for (let i = 0; i < 5; i+=1) {
    console.log(a); // 20

    if (i === 2) {
      console.log(a); // 20
    }
  }
}
// ❌ Помилка! Змінна a не доступна в цій області видимості
console.log(a);

for (let i = 0; i < 3; i+=1) {
  // ❌ Помилка! Змінна a не доступна в цій області видимості
  console.log(a);
}


//*Стек викликів
//JavaScript — однопотокова мова, тобто в одну одиницю часу може виконуватися тільки одна інструкція. Це означає, що вже викликані функції, які не закінчили своє виконання, повинні чекати виконання функцій, викликаних усередині себе, для того щоб продовжити свою роботу.
//Стек — структура даних, яка працює за принципом LIFO (Last-In-First-Out), тобто останнім прийшов — першим вийшов.
//Stack frame (кадр стека, запис стека) — структура, яка додається на стек при виклику функції. Зберігає службову інформацію, наприклад ім'я функції та номер рядка, у якому стався виклик.
function bar() {
  console.log("bar");
}

function baz() {
  console.log("baz");
}

function foo() {
  console.log("foo");
  bar();
  baz();
}

foo();

Під час виконання цього коду спочатку викликається foo(), потім всередині foo() викликається bar(), а потім baz(). Виклики console.log() так само враховуються, адже це функція. На ілюстрації нижче покроково зображено стек викликів для прикладу.

  

    
    
    























