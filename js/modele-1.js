'use strict';

let username = "Anna";
username = "Adam"; //зміну можна змінити звертаючись тільки до її імені !!!!
console.log(username);

const secondUsername = "Hanna";
console.log(secondUsername);

//_________________________________________________________________________________
//null чи underfine
let dog;
console.log(dog); // якщо значення змінної не задано - буде показано в console - underfine

let cat = null;
console.log(cat); // спеціально задано що зміна немає значення тому виведе null в console

//____________________________________________________________________________________

//*typeof - показує якого типу данних є значення або вираз

const flowers = 2;
console.log(typeof flowers); // тут покаже що тип данних "number"

const socks = "Japan";
console.log(typeof socks); // виведе "string"

const isSideBarOpen = true;
console.log(typeof isSideBarOpen);// виведе "boolean"

let nameDog;
console.log(typeof nameDog);// виведе "underfine"

let brain = null;
console.log(typeof brain);// виведе "null" (null - є примітивним значенням - не є об'єктами і не мають методів)
//Коли ми використовуємо оператор typeof для перевірки типу значення null, він повертає рядок object. 
//Це помилка яку вже ніхто не виправляє! Причина цього полягає в тому, що в ранніх версіях JavaScript null було розглянуто як спеціальний випадок об’єкта. Це була помилка в реалізації мови, збережена для забезпечення зворотної сумісності з існуючим кодом. Тому коли typeof застосовується до null, він повертає object, щоб зберегти цю сумісність.

//_________________________________________________________________________
//*Арифметичні операції

//Оператор (%) повертає остачу від ділення одного числа на інше.
const x = 8;
const y = 5;
console.log(x % y); // 3

//Оператор (/) використовується для ділення одного числа на інше.
const a = 8;
const b = 5;
console.log(a/b); // 1.6

//Оператор (**) використовується для піднесення числа до степеня.
const e = 8;
const m = 5;
console.log(e ** m); // 32768

//_________________________________________________________________________
//*Комбіновані оператори
/* Додавання: +=. Приклад: x += y еквівалентно x = x + y
Віднімання: -=. Приклад: x -= y еквівалентно x = x - y
Множення: *=. Приклад: x *= y еквівалентно x = x * y
Ділення: /=. Приклад: x /= y еквівалентно x = x / y
Остача від ділення: %=. Приклад: x %= y еквівалентно x = x % y */
//let age = 25;
//age = age + 1;
//console.log(age); // 26

// Aле краще ------>
let age = 25;
age += 1;
console.log(age); // 26

let lamps = 34;
lamps += 2;
console.log(lamps); //36

let books = 3;
books *= 2;
console.log(books);//6

let pins = 4;
pins /= 2;
console.log(pins); //2

let brushs = 9;
brushs %= 3;
console.log(brushs); //0
//_________________________________________________________________________
//*Конкатенація рядків = склеювання рядків

const message = "Mango " + "is" + " happy";
console.log(message); // "Mango is happy"

const ages = 24;
const messages = "Poly is " + ages + " years old!";
console.log(messages);// Poly is 24 years old!

console.log("Mango" + 55); // "Mango55"
console.log("Mango" + true); // "Mangotrue"

// зверни увагу на нижні приклади!!!
console.log(1 + "2"); // "12" 
console.log(1 + "2" + 4); // "124"
console.log(1 + 2 + "4"); // "34"

//_________________________________________________________________________
//*Перетворення типів: рядки

//Явне перетворення типів
//Для перетворення будь-якого значення на рядок можна використовувати вбудовану функцію String(), яка повертає результат у вигляді рядка.
console.log(String(5)); // "5"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"

//Неявне перетворення типів
//відбувається автоматично під час виконання операцій або обчислень. Наприклад, якщо виконується операція конкатенація
console.log("5" + 3); // "53"
console.log("5" + true); // "5true"
console.log("5" + false); // "5false"
console.log("5" + null); // "5null"
console.log("5" + undefined); // "5undefined"


//_________________________________________________________________________
//*Шаблонні рядки - огортаються зворотними лапками (англ. backticks) (``). Шаблонні рядки - це синтаксис, який полегшує об'єднання статичного тексту з динамічним (тобто текстом, що містить змінні, обчислення тощо). 
//Шаблонні рядки дозволяють підставляти значення змінних безпосередньо всередині рядка за допомогою 
//синтаксису інтерполяції ${змінна}.
const guestName = "Maria";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Maria, your room number is 207!"

//Порівняння конкатенації та шаблонних рядків

//Конкатинація
/* const guestName = "Mango";
const roomNumber = 207;
const greeting = "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); // "Welcome Mango, your room number is 207!" */

//Шаблоний рядок - більш читабельний
/* const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!" */

//_________________________________________________________________________
//*Довжина рядка
const productName = "Repair droid";
// Якщо у змінній зберігається рядок
console.log(productName.length); // 12
// Якщо рядковий літерал
console.log("Repair droid".length); // 12


//_________________________________________________________________________
//*Ідексація рядків
//Для доступу до певного символу рядка ми використовуємо синтаксис квадратних дужок,
// де вказуємо індекс потрібного символу: string[index], тобто рядок[індекс]
const elementName = "Repair droid";
console.log(elementName[0]); // 'R'
console.log(elementName[5]); // 'r'
console.log(elementName[11]); // 'd'

//Отримання останнього символу рядка можливе за його індексом string[lastIndex]. 
//Щоб знайти індекс останнього символу рядка, треба від довжини цього рядка відняти одиницю string.length - 1
const article = "Liverpul";
const lastElementIndex = article.length - 1;
console.log(article[lastElementIndex]); // 'l'

// краще в скороченому вигляді як внизу
const mark = "Hause";
console.log(mark[mark.length -1]);// e

// НЕ МОЖНА ЗМІНИТИ ЗНАЧЕННЯ ІНДЕКСУ НИЖЧЕ----Ruslana ЗАЛИШИТЬСЯ Ruslana БЕЗ ЗМІН!!!
//let customername = "Ruslana";
//customername[3] = "a";

//_________________________________________________________________________
//*Оператори порівняння - повертають булеве значення (true або false) залежно від результату порівняння.
//Оператори рівності:

//Оператори несуворої рівностію.- Це може призвести до неочікуваних результатів, тому багато розробників намагаються уникати їх використання.

//сonsole.log(5 == 5); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false

//Оператори суворої рівності. Рекомендується використовувати оператори суворої рівності, які не виконують перетворення типів операндів.
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(5 !== "5"); // true
console.log(5 !== 5); // false

//_________________________________________________________________________
//*Перетворення типів: числа
//Для явного перетворення будь-якого значення в число можна використовувати вбудовану функцію Number(), яка повертає результат у вигляді числа.

console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0

//При перетворенні до числа:
    //true завжди приводиться до 1;
    //false , null і "" завжди приводяться до 0.

//Якщо неможливо привести значення до числа, результатом перетворення буде спеціальне значення NaN (Not a Number). Ось кілька прикладів, коли результатом перетворення буде NaN.

console.log(Number(undefined)); // NaN
console.log(Number("Jacob")); // NaN
console.log(Number("25px")); // NaN

//Арифметичні операції (+, -, *, /) виконують неявне перетворення типів.
console.log("5" * 2); // 10
console.log("10" - 5); // 5
console.log(5 + true); // 6
console.log(5 - true); // 4

//У разі використання операторів порівняння (<, >, <=, >=) також виконується неявне перетворення типів
console.log("10" > 5); // true
console.log(10 > "5"); // true
console.log(5 > true); // true
console.log(5 < true); // false
console.log("5" < true); // false


//_________________________________________________________________________
//*Перетворення рядків у числа

//Метод Number.parseInt()
console.log(Number.parseInt("5")); // 5 
console.log(Number.parseInt("5.5")); // 5 
console.log(Number.parseInt("5cm")); // 5 
console.log(Number.parseInt("12qwe74")); // 12 
console.log(Number.parseInt("12.46qwe79")); // 12 
console.log(Number.parseInt("cm5")); // NaN 
console.log(Number.parseInt("")); // NaN 
console.log(Number.parseInt("qweqwe")); // NaN
//Якщо перші символи рядка не можуть бути перетворені на число, або рядок порожній чи відсутній, результатом буде значення NaN (Not a Number).

//Метод Number.parseFloat()
//Метод Number.parseFloat() аналогічний Number.parseInt() з однієї відмінністю: перетворює рядок на число з плаваючою крапкою.
console.log(Number.parseFloat("5")); // 5
console.log(Number.parseFloat("5.5")); // 5.5
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseFloat("5cm")); // 5
console.log(Number.parseFloat("5.5cm")); // 5.5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("cm5")); // NaN
console.log(Number.parseFloat("")); // NaN
console.log(Number.parseFloat("qweqwe")); // NaN

//_________________________________________________________________________
//Арифметичні функції

// 1. Math.floor(num): повертає найближче ціле число, яке є меншим або дорівнює вказаному числу num. Наприклад:
console.log(Math.floor(1.3)); // 1
console.log(Math.floor(1.7)); // 1

// 2. Math.ceil(num): повертає найближче ціле число, яке є більшим, або дорівнює зазначеному числу num. Наприклад:
console.log(Math.ceil(1.3)); // 2
console.log(Math.ceil(1.7)); // 2

// 3. Math.round(num): повертає значення числа після округлення до найближчого цілого.
console.log(Math.round(1.3)); // 1
console.log(Math.round(1.7)); // 2

// 4. Math.max(num1, num2, ...): повертає найбільше число з набору переданих чисел. Наприклад:
console.log(Math.max(20, 10, 50, 40)); // 50

// 5. Math.min(num1, num2, ...): повертає найменше число з набору переданих чисел. Наприклад:
console.log(Math.min(20, 10, 50, 40)); // 10

// 6. Math.random(): повертає випадкове число в діапазоні від 0 (включно) до 1 (за винятком). Наприклад:
console.log(Math.random()); // випадкове число між 0 і 1, наприклад 0.2 ... 0.9166353649342294


//_________________________________________________________________________
//*Дробове число
//При виконанні операцій з дробовими числами можуть виникати неточності через внутрішнє представлення чисел у пам'яті комп'ютера.
//Використовувати метод числа toFixed() для округлення результату до певної кількості знаків після крапки.
console.log((0.1 + 0.2).toFixed(1)); // "0.3"
console.log((5).toFixed(2));  //  ”5.00”
console.log((8.762195).toFixed(4));  //  “8.7622”
//_________________________________________________________________________
//*Функція  
 //function multiply - імя (x, y, z)-параметри {тіло}
function multiply(x, y, z) {
    console.log(`Result: ${x * y * z}`);
};
  // Передача аргументів
  multiply(2, 3, 5); // "Result: 30"
  multiply(4, 8, 12); // "Result: 384"
  multiply(17, 6, 25); // "Result: 2550"

  //

function multi(z, k, s) {
	const product = z * k * s;
  // Повертаємо результат виразу множення
return product;
}

// Результат роботи функції можна зберегти у змінну
const result = multi(2, 3, 5);
console.log(result); // 30

//Якщо в тілі функції відсутній оператор return або він не вказує на конкретне значення, функція поверне спеціальне значення undefined.
function multip(x, y, z) {
	const prod = x * y * z; //тут немає return або console.log, тому значення не визначенно
}
const resul = multip(2, 3, 5);
console.log(resul); // undefined

//////////////////////////////////

function multipl(x, y, z) {
    console.log(`Result: ${x * y * z}`);
};

  multipl(2, 3, 5); // "Result: 30"

/* console.log("A");
function logStuff() {
	console.log("B");
}
console.log("C");
logStuff();
console.log("D"); */

//A > C > B > D. Код виконується зверху вниз. Отже, спочатку А. Потім оголошується функція, але виклику функції нема, отже, код виконується далі й переходить до C. 
//Після С бачимо виклик функції, отже, виконується В. І після виконання функції виконується D.
















