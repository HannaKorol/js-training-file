'use strict';
//*Масив — 
//Uе впорядкована колекція елементів, де кожен елемент має свій порядковий номер, який називається індексом. Перший індекс 0.
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
const v = a;
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
//Якщо не вказати параметри begin і end, буде створено повну копію вихідного масиву

//Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів 
//(тобто стільки елементів з кінця, скільки вказано в параметрі begin)
const pplanets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(pplanets.slice(-2)); // ["Jupiter", "Saturn"]


//4.Метод slice() корисний, коли необхідно отримати підмасив із вихідного масиву або створити його копію для подальшої роботи з ним.
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
  //Ітерація по масиву з використанням циклу for дозволяє перебрати елементи масиву і виконати певну дію для кожного елемента.
  function calculateTotalPrice(order) {
    let sum = 0;
      for (let i = 0; i < order.length; i++)
      sum += order[i];
     }
     return sum; 
    };
    console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
    console.log(calculateTotalPrice([164, 48, 291])); // 503
    console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
    console.log(calculateTotalPrice()); // з випадковим масивом повертає правильне значення
























