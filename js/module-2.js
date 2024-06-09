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



















