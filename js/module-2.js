'use strict';
//___________________________________________________________
//*Розгалуження - наявність підписки “pro” — це умова, а різні варіанти завантажень (з обмеженням чи без) — це розгалуження подальших сценаріїв.

//1. Інструкція if. 
//Коли інтерпретатор зустрічає інструкцію if, він обчислює вказану умову в круглих дужках (condition), перетворюючи її до логічного типу (boolean).
let price = 0;
const subscription = "pro";

if (subscription === "pro") {
price = 100;
}

console.log(price); // 100

// Якщо умова перетворюється до false, код у фігурних дужках не буде виконуватися і price залишиться рівним 0.

let pric = 0;
const subscriptio = "free";

if (subscriptio === "pro") {
    pric = 100;
}

console.log(pric); // 0

//2. Інструкція if...else
const grade = 40;

if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

//3. Блок else...if - дозволяє перевірити та зреагувати на виконання або невиконання кількох умов. 
//!!Це корисно, коли ми маємо більше однієї умови. Uі інструкції зазвичай довші, ніж інші способи розгалужень.

const grad = 85;

if (grad >= 90) {
  console.log("Perfectly");
} else if (grad >= 80) {
  console.log("Good");
} else if (grad >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

//_____________________________________________________________
//*Тернарний оператор — це коротша синтаксична заміна інструкції if...else. 

//<condition> ? <expression if condition is true> : <expression if condition is false>
//

// з if
let type;
const age = 20;
if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}
console.log(type); // 'adult'

// з Тернарний оператор
const ag = 20;
const typ = ag >= 18 ? 'adult' : 'child';
console.log(typ); // 'adult'

const height = 165;
const gender = height <= 170 ? 'woman' : 'man';
console.log(gender);

const tv = 15000;
const pr = tv >= 19000 ? 'expensive' : 'cheap';
console.log(pr);

const bananePrice = 2;
const buyOrNot = bananePrice > 2 ? 'not buy' : 'buy';
console.log(buyOrNot);

const a = 5;
const b = 10;
const whatBiggerNumber = a > b ? 'bigerNumber:a' : 'biggerNumber: b';
console.log(whatBiggerNumber);

//const a = 5;
//const b = 10;
//const biggerNumber = a > b ? a : b;
//console.log(biggerNumber); // 10

//____________________________________________________________________________________
//*Оператор switch 
//- є більш компактним і зручним способом для порівняння виразів з кількома варіантами, ніж інструкції if...else та else...if.
//!!!!Оператор switch перевіряє тільки на сувору рівність.

function getSubscriptionPrice(type) {
switch (type) {
case "starter":
return 0;
case "professional":
return 20;
case "organization":
return 50;
default:
return "Invalid subscription type!";
}
}
  console.log(getSubscriptionPrice("professional")); //20
  console.log(getSubscriptionPrice("organization"));//50
  console.log(getSubscriptionPrice("starter"));// 0
  console.log(getSubscriptionPrice("random")); // "Invalid subscription type!"
  console.log(getSubscriptionPrice("premium")); // "Invalid subscription type!"


  //_____________________________________________________-
  //Блокова область видимості [image.png]

  //________________________________________________________
  //*Перетворення типів: логічне

console.log(Boolean(true)); // true
console.log(Boolean(false)); // !false

  //Числа
  //Число 0, значення NaN, null і undefined завжди перетворюються на false. Усі інші числа перетворюються на true.
console.log(Boolean(NaN)); // !false
console.log(Boolean(null)); // !false
console.log(Boolean(undefined)); // !false
console.log(Boolean(0)); // !false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); //true

//Рядки
//Порожній рядок ("") приводиться до false. Будь-які інші не пусті рядки приводяться до true.
console.log(Boolean("")); // !false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true

//!Запам’ятай 6 випадків, які приводяться до false:
//1. 0
//2. ""
//3. Nan
//4. null
//5. underfined
//6. false

//!Зверни увагу, що "false" у подвійних лапках. 
//!Отже, це не логічне значення false, а рядок зі словом "false". А будь-які не пусті рядки приводяться до true.
console.log(Boolean("false")); //true


//__________________________________________________________________________________________-

//*Логічне «І»
//Оператор "І" (&&) наводить усі операнди до логічного типу (true або false) і повертає значення одного з них.
//повертає значення: //!!останнього істинного (тільки правого) операнда, 
                    //!!або першого хибного (лівого чи правого), на якому він запнувся.

//У наступних прикладах обидва операнди перетворюються на true. Обчислення відбуваються зліва направо, тому результатом буде значення правого операнда.
console.log("hello" && 5); // 5
console.log(5 && "hello"); // "hello"
console.log("mango" && "poly"); // "poly"
console.log("poly" && "mango"); // "mango"
console.log(3 && true); // true
console.log(true && 3); // 3

//А ось у цьому прикладі один із операндів буде приведений до false, отже, результатом буде хибний операнд.
console.log("hello" && 0); // 0
console.log(0 && "hello"); // 0
console.log(3 && false); // false
console.log(false && 3); // false
console.log(0 && ""); // 0
console.log("" && 0); // ""

//якщо операндами є вирази, то спочатку вони обчислюються, а потім їх результати будуть порівнюватися оператором &&.
const h = 20;
console.log(h > 10 && h < 30); // true && true -> true

const l = 50;
console.log(l > 10 && l < 30); // true && false -> false
console.log(l > 80 && l < 120); // false && true -> false

//Оператор && може бути не тільки самостійною умовою, а й частиною більш складних умов, наприклад, в умові інструкції if
const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;
if(screenWidth <= sm) {
	console.log("Mobile screen");
} else if(screenWidth > sm && screenWidth <= md) {
	console.log("Tablet screen");
} else if(screenWidth > md && screenWidth <= lg) {
	console.log("Desktop screen");
} else {
	console.log("Godzilla screen");
}
//_______________________________________________________________________________________-

//*Логічне «АБО»
//Оператор "АБО" (||) перетворює всі операнди до логічного типу (true або false) і повертає значення одного з них.
//Якщо хоча б один із операндів можна перетворити на true, результатом логічного «АБО» буде цей операнд.
console.log(true || false); // true
console.log(false || true); // true

console.log(5 || false); // 5
console.log(false || 5); // 5

console.log("hello" || 0); // "hello"
console.log(0 || "hello"); // "hello"

//Якщо всі операнди перетворюються на false, результатом буде значення крайнього правого операнда.
console.log(0 || false); // false
console.log(false || 0); // 0
console.log(null || ""); // ""
console.log("" || null); // null

//Якщо до істини було перетворено перший операнд, то другий навіть не буде оцінюватися.
console.log(5 || 3); // 5
console.log(3 || 5); // 3

console.log("mango" || "poly"); // "mango"
console.log("poly" || "mango"); // "poly"

//_______________________________________________________________________________________-

//*Логічне «НІ» -це унарний оператор — він виконує операцію над одним операндом праворуч.
//Логічне «НІ» приводить операнд до логічного значення (true або false) і потім заперечує (інвертує) його, тобто заміняє на протилежне: true —> false, а false —> true.
console.log(!true); // false
console.log(!false); // true

//_________________________________________________________________________________________
//*Методи рядків

//Властивості
//&objectName.property
const message = "JavaScript is awesome";
console.log(message.length); // 21

//Методи - це дії, які можна виконати із сутністю, такі як додати цукор чи підігріти.
//&objectName.method()

//toUpperCase()
const messages = "JavaScript is awesome";
console.log(messages.toUpperCase()); // "JAVASCRIPT IS AWESOME"

//_____________________________________________________________
//*Метод slice()
//Метод slice() копіює підрядок із вихідного рядка, починаючи з індексу startIndex і до (не включаючи) індексу endIndex, і повертає цю копію як новий рядок.

//str.slice(startIndex, endIndex)
const fullName = "Jacob Mercer";
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'

//Параметр endIndex є необов'язковим.Якщо endIndex не вказаний, витягуються всі елементи до кінця рядка.
console.log(fullName.slice(1)); // 'acob Mercer'
console.log(fullName.slice(3)); // 'ob Mercer'

//Якщо викликати метод slice() без аргументів, він створює точну копію рядка і повертає її.
console.log(fullName.slice()); // 'Jacob Mercer'

//Результат виклику методу slice() можна зберігати в змінній для подальшого використання.
const firstName = fullName.slice(0, 5); //
const lastName = fullName.slice(6); //

console.log(fullName); // "Jacob Mercer"
console.log(firstName); // "Jacob"
console.log(lastName); // "Mercer"


//__________________________________________________________________-
//*Методи toLowerCase() і toUpperCase()
// Bикористовуються для зміни регістру символів у рядку. Обидва методи не змінюють вихідний рядок, а повертають новий рядок у відповідному регістрі.

//Метод toLowerCase() повертає новий рядок, у якому всі символи -> в нижній регістр.
const messagess = "Welcome to Bahamas!";
console.log(messagess.toLowerCase()); // "welcome to bahamas!"
console.log(messagess); // "Welcome to Bahamas!"

//Метод toUpperCase() повертає новий рядок, у якому всі символи -> у верхній регістр.
const messagee = "Welcome to Bahamas!";
console.log(messagee.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(messagee); // "Welcome to Bahamas!"

//___________________________________________________________________
//*Метод includes()
//Bикористовується для перевірки наявності підрядка у рядку. 

//str.includes(substring)

function checkForName(fullName, firstName) {
const lowercaseFullName = fullName.toLowerCase();
const lowercaseFirstName = firstName.toLowerCase();
if (lowercaseFullName.includes(lowercaseFirstName)) {
return true;
} else {
return false;
}
};

checkForName("Jason Neis", "Jason");//true
checkForName("Jason Neis", "jAsOn");//true
checkForName("Jason Neis", "Jacob"); //false
checkForName("Caty Stars", "Caty");//true
checkForName("Caty Stars", "cAtY");//true
checkForName("Caty Stars", "Andromeda");//false

//_________________________________________-
//*Методи startsWith() і endsWith()
//Методи startsWith() і endsWith() призначені для перевірки початку й закінчення рядка відповідно. 
//Вони повертають булеве значення true або false, залежно від того, чи відповідає початок або кінець рядка заданому значенню.
const str = "Hello, world!";

console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("hello")); // false (метод чутливий до регістру)

console.log(str.endsWith("world!")); // true
console.log(str.endsWith("World!")); // false (метод чутливий до регістру)

//__________________________________________
//*Метод indexOf()
//Bикористовується для пошуку першого входження підрядка в рядок.     
//Повертає індекс першого входження (індекс першого символу) підрядка, якщо він знайдений або -1, якщо підрядок не виявлено.
const text = "Welcome to Bahamas!";
const index = text.indexOf("to");
console.log(index); // 8

//________________________________________
//*Метод trim()
//використовується для видалення початкових і кінцевих пробілів із рядка.
//str.trim()
const input = " JavaScript is awesome!    ";
const trimmedInput = input.trim();
console.log(trimmedInput); // "JavaScript is awesome!"
console.log(input); // " JavaScript is awesome!    "

//!!Метод trim() не змінює вихідний рядок, а повертає новий рядок без початкових і кінцевих пробілів.

//______________________________________
//*Цикли

//*Цикл while
//це цикл з передумовою, тобто він виконується доки істинна певна умова, зазначена перед його початком.

let clientCounter = 18; // кількість зайнятих номерів на поточний момент
const maxClients = 25; // загальнa кількість номерів у готелі.

while (clientCounter < maxClients) {
console.log(clientCounter);
clientCounter += 1;
}
//!Доти, доки умова прирівнюється до true виконується тіло циклу while.

//___________________________________________
//*Цикл do…while
//код у тілі циклу виконується принаймні один раз, навіть якщо умова не виконується з самого початку.
let count = 0;

do {
console.log(`Count: ${count}`);
count += 1;
} while (count < 5);

//__________________________________________________
//*Цикл for
//Цикл for також дозволяє виконувати код, що повторюється, багато разів. 
//На відміну від циклів while і do…while, цикл for має змінну-лічильник. 
//Змінна-лічильник оголошується за допомогою ключового слова let (оголошення через const видасть помилку).
// На кожній ітерації після виконання коду з тіла циклу вона змінює своє значення від заданого початкового до кінцевого з певним кроком.

//У наведеному прикладі циклу for змінна i ініціалізується значенням 0. Цикл виконується доти, доки i менша або дорівнює 20. 
//Після кожної ітерації значення i збільшується на 5. 
//У результаті в консоль будуть виведені числа 0, 5, 10, 15 і 20.
for (let i = 0; i <= 20; i += 5) {
    console.log(i);
} // 0, 5, 10, 15 і 20.

//Також можна зробити зворотний відлік, змінивши умову і зменшуючи лічильник на якесь значення після кожної ітерацi.
for (let i = 20; i >= 0; i -= 5) {
    console.log(i); 
} //20, 15, 10, 5 і 0

//!блок ініціалізації лічильника циклу виконується усього один раз на початку виконання циклу

//_____________________________________________________
//*Інкремент і декремент
//Інкремент (++) і декремент (--) — це операції, які відповідно збільшують або зменшують значення числової змінної на одиницю
// і одразу ж зберігають оновлене значення у цій змінній.

//Префіксний інкремент (++value) збільшує значення змінної -> використовує нове значення у виразі.
let x = 5;
const y = ++x;
console.log(x); // 6
console.log(y); // 6

//Постфіксний інкремент (value++) спочатку використовує поточне значення змінної у виразі, а потім виконує збільшення значення.
let m = 5;
const s = m++;
console.log(m); // 6
console.log(s); // 5

//Префіксний декремент (--value) спочатку зменшує значення змінної, а потім використовує нове значення у виразі.
let z = 5;
const u = --z;
console.log(z); // 4
console.log(u); // 4

//Постфіксний декремент (value--) спочатку використовує поточне значення змінної у виразі, а потім виконує зменшення значення.
let w = 5;
const q = w--;
console.log(w); // 4
console.log(q); // 5

//*Оператор break
//використовується в циклі для переривання його виконання. 
for (let i = 0; i < 10; i+=1) {
  console.log(i);

  if (i === 5) {
    console.log('Met the number 5, interrupt the execution of the cycle');
    break;
  }
}
console.log('Log after cycle');
//У цьому прикладі цикл for мав би виконуватися, доки значення змінної i менше 10. Але в тілі циклу є умова if (i === 5), яка перевіряє, чи дорівнює значення i числу 5. 
//Коли ця умова стає істинною, тіло if виконується і застосовується оператор break, і виконання циклу припиняється.
//Таким чином, у консоль будуть виведені числа від 0 до 5 (включно), а цикл завершиться.

//!Тобто оператор break не припиняє виконання функції, а тільки перериває цикл.
//!Для того щоб переривати виконання одразу циклу і функції і повернути результат у зовнішній код, є оператор return.
function findNumberFromFive(max, target) {
	console.log("Log in the body of the function before the cycle");

	for (let i = 5; i <= max; i += 1) {
	    console.log("Current counter value i:", i);
	
	    if (i === target) {
	      console.log(`Found the number $ {target}, we make a return, interrupting the loop and function`);
				return i;
	    }
	  }

  // Цей console.log не виконується
  console.log("Log in body function after cycle");
}

const result = findNumber(10, 6);
console.log("Log after exiting function");
console.log(`Result of function execution ${result}`);



























































