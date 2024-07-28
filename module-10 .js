//*Асинхронність

//Синхронний код -  виконується послідовно, кожна інструкція очікує, доки виконається попередня. Коли ти викликаєш функцію, яка виконує тривалу дію, це зупиняє програму на увесь час її виконання. Тобто в моделі синхронного програмування все відбувається по черзі.

//В асинхронному коді - одночасно можуть виконуватися декілька операцій. У такій моделі мережевий запит на сервер не зупинить програму, вона продовжить виконувати інші операції. Коли запит завершиться, програма повідомляє про це й отримує доступ до результату (наприклад, даних із сервера).
//За одиницю часу, як і раніше, може виконуватися тільки одна операція, тому що JavaScript — однопотокова мова. Асинхронне програмування досягається шляхом відкладених викликів функцій, де ініціалізація асинхронної операції і обробка її результату — це різні дії.

//Приклад синхронного коду
console.log("First log");
console.log("Second log");
console.log("Third log");


//Приклад асинхронного

//*функцією setTimeout() приймає два параметри:
//callback-функцію, яка буде викликана після закінчення часу;
//час, після якого буде викликана функція.

//--------------------------------------------------------------------------
// Виконується першою
console.log("First log");

setTimeout(() => {
	// Виконується третьою, через 2000 мілісекунд (2 секунди)
  console.log("Second log");
}, 2000);

// Виконується другою
console.log("Third log");
//-------------------------------------------------------------------------

//В асинхронних однопотокових процесах у тебе є графік завдань, в якому деякі завдання залежать від результату роботи інших. З виконанням кожного завдання викликається код для обробки його результату.



//Багатопотоковість
//*Багатопотоковий підхід (паралелізм) — ти наймаєш двох помічників. Одного — для приготування кави, а іншого — для тостів. Тепер у тебе є проблема управління помічниками (потоками), щоб вони не конфліктували один з одним на кухні під час спільного використання ресурсів.

//-------------------------------------------------------------------------

//Тайм-аут
//Таймери реалізовані в браузері, а не вбудовані в мову, і доступні на глобальному об'єкті window.
//*Функція setTimeout планує в асинхронній черзі відкладений виклик функції, який виконується після зазначеного інтервалу часу. Вона не викликає функцію безпосередньо, а лише планує її виконання через певний час.
//*Результатом виклику setTimout() буде цифровий ідентифікатор створеного таймера, який потім може бути використаним для його подальшого скасування.

const timerId = setTimeout(callback, delay, arg1, arg2, ...);

//callback — функція, виклик якої необхідно запланувати;
//delay — час у мілісекундах, через який callback-функція буде викликана один раз.
//Додаткові аргументи (arg1, arg2 тощо) не обов’язкові і будуть передані callback функції під час виклику. 

//-------------------------------------------------------------------------

//Скасування тайм-ауту
//*Метод clearTimeout(id)приймає ідентифікатор таймера та “очищає його”, тобто видаляє реєстрацію відкладеного виклику функції з черги.

const greet = () => {
console.log("Hello!");
};
const timerId = setTimeout(greet, 3000);
clearTimeout(timerId);
//У прикладі вище ми викликали clearTimeout(), який виконається раніше, ніж буде викликана функція greet(). Отже, таймер з timerId буде видалений і реєстрація відкладеного виклику greet() скасується. Тому в консоль нічого не виведеться.

//----------------------------------------------------------------------------


//Інтервал

//*Метод setInterval() — це простий спосіб повторення коду знову і знову з певним інтервалом.Синтаксис і параметри такі самі, як у setTimeout().
const intervalId = setInterval(callback, delay, arg1, arg2, ...);

//На відміну від setTimeout(), інтервал запускає виконання функції не один раз, а регулярно повторює її через вказаний проміжок часу.
//Результатом виклику setInterval() буде цифровий ідентифікатор створеного таймера, який потім може бути використаним для його подальшого скасування.
//У браузерного таймера є мінімально можлива затримка, вона коливається приблизно від 0 до 4 мілісекунд. За стандартом, мінімальна затримка становить 4 мілісекунди, тому різниці між setInterval(cb, 1) і setInterval(cb, 4) немає.

//-------------------------------------------------------------------------------
//Скасування інтервалу

//Якщо з якихось причин нам потрібно скасувати виконання функції, зареєстрованої інтервалом, використовується метод clearInterval.
//*clearInterval(id) - Він приймає ідентифікатор інтервалу та очищає його, тобто видаляє виклики, зареєстровані переданим інтервалом з асинхронної черги.




//-------------------------------------------------------------------------------


//*Дата і час

Використовуючи можливості класу Date, можна створювати годинник, лічильники, календарі та інші інтерактивні елементи інтерфейсу.

Екземпляр класу Date — це об'єкт, що відображає певний момент часу. Створення дати без аргументів повертає об'єкт, що зберігає дату і час на момент його ініціалізації, тобто поточні дату і час.
const date = new Date();
console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)" //поточні дату і час.

У рядковому перетворенні об'єкт повертає результат виклику вбудованого методу toString(), тому у першому лозі ми отримаємо рядок, а не об'єкт.

//-----------------------------------------------------------------------------------------------------------------------------------------

//*Встановлення дати

Створюючи екземпляр класу Date, можна налаштувати різні формати відображення даних:

Можна передати тільки:

*рік:
console.log(new Date("2030")); // "Tue Jan 01 2030 02:00:00 GMT+0200"
*рік і місяць:
console.log(new Date("2030-03")); // "Fri Mar 01 2030 02:00:00 GMT+0200"
console.log(new Date("2030-03-16")); // "Sat Mar 16 2030 02:00:00 GMT+0200"
*повну дату, включно з числом і часом:
console.log(new Date("2030-03-16T14:25:00")); // "Sat Mar 16 2030 14:25:00 GMT+0200"

Інший спосіб створення нової дати — це передати сім чисел, які описують рік, місяць (починається з 0), день, години, хвилини, секунди й мілісекунди. Обов'язкові тільки перші три.

const date = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200 "


1. приклад, де до класу Date передають рядок, який описує тільки дату:
const date = new Date("2030-03-16");
console.log(date); // "Sat Mar 16 2030 00:00:00 GMT+0200"

2. Тут до Date передали рядок, де дата і час розділяються великою літерою T (time).
const date = new Date("2030-03-16T14:25:00");
console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

//-----------------------------------------------------------------------------------------------------------------------------------------

//*Unix час - Для комп’ютерів відлік часу рахується в мілісекундах, що минули після опівночі 1 січня 1970 року в часовому поясі UTC (Coordinated Universal Time).

Вбудований метод getTime() повертає числове значення цієї дати (timestamp) — кількість мілісекунд, що минула з півночі 1 січня 1970 року.

const date = new Date();
console.log(date.getTime()); // 1624021654154

Це число унікальне й ніколи не повториться, тому що момент часу унікальний і завжди тільки збільшується.

Зручність цього формату полягає в тому, що можна відображати точні моменти часу у вигляді одного числа і не турбуватися про дати, рядки й часові пояси. Адже можна отримати всю необхідну інформацію, коли необхідно.

//--------------------------------------------------------------------------------------------------------------------------------------------------

//*Метод Date.now() — це швидкий і зручний спосіб отримати поточний час у вигляді мілісекунд.
const time = Date.now(); // 1693237207904

Основна ідея застосування Date.now() полягає у вимірюванні часу, розрахунку інтервалів тощо.

Якщо ти хочеш виміряти, скільки часу займає виконання деякого коду, можна зробити так:

const startTime = Date.now();                                                  //Зберегти час до події.
// Твій код, виконуваний упродовж деякого часу
for(let i = 0; i <= 100; i += 1) {
console.log(i);
}
const endTime = Date.now();                                                   //Зберегти час після події.
const elapsedTime = endTime - startTime;    //Порахувати різницю між кінцевим і початковим часом.
console.log(`Elapsed time: ${elapsedTime} ms`);

    Зберегти час до події.
    Зберегти час після події.
    Порахувати різницю між кінцевим і початковим часом.

//---------------------------------------------------------------------------------------------------------------------------------------------------------
//*Геттери і сеттери

//Екземпляр класу Date має безліч методів для читання та запису значень дати і часу. Методи повертають або присвоюють рік, місяць, день місяця або тижня, годину, хвилину, секунду і мілісекунду для кожного екземпляра.

//Геттери використовуються для читання всієї дати або окремої складової. Значення, що повертається, залежить від поточного часового поясу, встановленого на комп'ютері.
const date = new Date("March 16, 2030 14:25:00");
console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// Повертає день місяця від 1 до 31
console.log("Day: ", date.getDate()); // 16

// Повертає день тижня від 0 до 6, починається з неділі
console.log("Day of the week: ", date.getDay()); // 6

// Повертає місяць від 0 до 11
console.log("Month: ", date.getMonth()); // 2

// Повертає рік з 4 цифр
console.log("Full year: ", date.getFullYear()); // 2030

// Повертає години
console.log("Hours: ", date.getHours()); // 14

// Повертає хвилини
console.log("Minutes: ", date.getMinutes()); // 25

// Повертає секунди
console.log("Seconds: ", date.getSeconds()); // 0

// Повертає мілісекунди
console.log("Milliseconds: ", date.getMilliseconds()); // 0


//Все, що можна прочитати — можна записати, методи для запису починаються з префікса set.

const date = new Date("March 16, 2030 14:25:00");

date.setMinutes(50); 
console.log(date); // "Sat Mar 16 2030 14:50:00 GMT+0200"

date.setFullYear(2040);
console.log(date); // "Fri Mar 16 2040 14:50:00 GMT+0200"

date.setMonth(4); 
console.log(date); // "Wed May 16 2040 14:50:00 GMT+0300"

//---------------------------------------------------------------------------------------------------------------------------------------------------------

//*Проміси — це об'єкт, що зберігає стан асинхронної операції, який використовується для відслідковування стану операції: чи була операція виконана успішно, з помилкою, або ще не завершена.

//Життєвий цикл проміса
//*Проміс може бути у 3 станах:
Очікування (pending) — початковий стан під час створення промісу.
Виконано (fulfilled) — операція виконана успішно з будь-яким результатом.
Відхилено (rejected) — операція відхилена з помилкою.

Коли проміс виконаний(fulfilled) або відхилений(rejected), використовується термін settled. Це не окремий стан, а лише спосіб описати, що проміс перебуває в будь-якому стані, крім очікування.

//Створення проміса
Проміс створюється як екземпляр класу Promise,який приймає функцію як аргумент (називається "виконавцем" (executor)) і відразу викликає її, ще до створення і повернення промісу.

const promise = new Promise((resolve, reject)=> {
  //Asynchronous operation
});

resolve(value) — функція для виклику у разі успішної операції. Переданий їй аргумент буде значенням виконаного промісу.
reject(error) — функція для виклику у разі помилки. Переданий їй аргумент буде значенням відхиленого промісу.

Колбек-функція повідомляє проміс, коли і як операція, з якою він пов'язаний, буде завершена. У ній можна виконувати будь-яку асинхронну операцію. Після її завершення потрібно викликати:
resolve() для позначення успішного виконання. Результатом буде fulfilled.
Або
reject() у разі помилки, який встановлює стан промісу як "відхилений" (rejected).

Що повертає виклик new Promise()? -Об’єкт
синтаксис створення промісу? - const promise = new Promise(executor)

//---------------------------------------------------------------------------------------------------------------------------------------------------------

//Метод then() 

promise.then(onResolve, onReject)
onResolve(value) — 1-й аргумент методу then(), колбек-функція, яка буде викликана у разі успішного виконання промісу та отримає його результат як аргумент.
onReject(error) — 2-й аргумент методу then(), колбек-функція, яка буде викликана у разі виконання промісу з помилкою та отримає її як аргумент.

//--------------------------------------
const isSuccess = true;
// Create promise
/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
}); */

// Registering promise callbacks
promise.then(
  value => {
    console.log(value); // "Success! Value passed to resolve function"
  },
  error => {
    console.log(error); // "Error! Error passed to reject function"
  }
);
//--------------------------------------

Якщо функції onResolve і onReject містять складну логіку, їх для зручності оголошують як зовнішні функції і передають у метод then() за ім'ям.

//---------------------------------------------------------------------------------------------------------------------------------------------------------

Метод catch() - обробляє помилку виконання промісу. Цей метод є для «відловлювання» помилок. Має йти після then().

promise
	.then(value => {
		// Promise fulfilled
	})
	.catch(error => {
	  // Promise rejected
	});

  Колбек-функція в методі catch буде викликана в разі виконання промісу з помилкою, і отримає цю помилку як аргумент.

//-------------------------------------------------------------------------------------------------------------

Метод finally() - Цей метод може бути корисним, якщо необхідно виконати код після того, як проміс буде виконаний незалежно від результату (fulfilled або rejected). 

promise
/* .then(value => console.log(value)) // "Success! Value passed to resolve function"
  .catch(error => console.log(error)) // "Error! Error passed to reject function" */
  .finally(() => console.log("Promise settled")); // "Promise settled"

  Метод finally() дозволяє уникнути дублювання коду в обробниках then() і catch().

  Що отримує функція, яка передається аргументом у метод finally? Нічого
  Коли виконається функція, яка передається аргументом у метод finally? - Після того, як проміс буде виконано успішно або з помилкою

//-------------------------------------------------------------------------------------------------------------

//*Ланцюжки промісів

Метод then() повертає проміс. Перед його виконанням може минути деякий час, отже, частина ланцюжка, що залишилася, буде чекати на результат. У разі виникнення помилки в будь-якому місці ланцюжка, виконання всіх наступних then() скасовується, а управління передається методу catch(). Тому він має знаходитись у кінці ланцюжка усіх then().

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

  Значенням промісу, який поверне then, буде значення, яке поверне його колбек-функція в разі успішного виконання промісу, або помилка, яка виникне в разі невдачі. Таким чином, воно може бути будь-яким значенням або помилкою, залежно від того, як проміс був виконаний.
Метод then() повертає новий проміс, який у свою чергу отримує значення від своєї callback-функції onResolve. Ця особливість дозволяє формувати послідовність асинхронних операцій, зв'язуючи проміси в ланцюжок.

//-------------------------------------------------------------------------------------------------------------

//*Промісифікація - це перетворення функції з колбеками таким чином, щоб вона не приймала колбеки, а повертала проміс. Така функція називається промісифікована.
Відмінності промісу і callback-функції:
    Колбеки — це функції, проміси — це об'єкти.
    Колбеки передаються як аргументи функції, що виконує асинхронну операцію, а проміси створюються всередині цієї функції і повертаються як її результат.
    Колбеки обробляють успішне або неуспішне завершення операції, проміси нічого не обробляють, тільки зберігають поточний стан асинхронної операції.
    Колбеки можуть обробляти декілька подій, проміси пов'язані тільки з однією подією.


Давай промісифікуємо функцію. Для початку напишемо код, який поверне з функції проміс. Для цього створюємо в ній проміс через new Promise і повертаємо його.
const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
		// ...
  });
};
fetchUserFromServer("Mango")  // результатом виклику fetchUserFromServer("Mango") буде проміс
	.then(user => console.log(user))  // проміс обробляємо в методі then()


//-------------------------------------------------

  Весь код, пов'язаний із логікою роботи, додаємо всередину функції створення промісу.
  const fetchUserFromServer = username => {
    return new Promise((resolve, reject) => {
      console.log(`Fetching data for ${username}`);
  
      setTimeout(() => {
        // Change value of isSuccess variable to simulate request status
        const isSuccess = true;
  
        if (isSuccess) {
          resolve("success value");  // значенням параметра resolve буде колбек-функція методу then()
        } else {
          reject("error");  // значенням параметра reject буде колбек-функція методу catch()
        }
      }, 2000);
    });
  };
  
  fetchUserFromServer("Mango")
    .then(user => console.log(user))
    .catch(error => console.error(error));

  
//-------------------------------------------------------------------------------------------------------------

  //*Promise.resolve() і Promise.reject() - — це статичні методи для створення промісів, що миттєво успішно виконуються або відхиляються.  Вони працюють аналогічно new Promise(), повертають проміс, але мають коротший синтаксис.


  Так створюється проміс, що виконався з помилкою через Promise.reject():
  Promise.reject("error");
	.then(value => console.log(value));
	.catch(error => console.log(error));

  Так створюється успішно виконаний проміс через Promise.resolve():
  Promise.resolve("success value");
	.then(value => console.log(value));
	.catch(error => console.log(error));

  Promise.reject().then().catch(); - Проміс, створений за допомогою Promise.reject(), є відхиленим (rejected), і тому метод catch виконається для обробки цього відхилення. 


//-------------------------------------------------------------------------------------------------------------

//*Промісифікація синхронних функцій

Методи Promise.resolve і Promise.reject використовуються для промісифікації функцій, коли не треба чекати результату асинхронної операції, а просто необхідно побудувати ланцюжок промісів, і вже є початкове значення.

const makeGreeting = guestName => {
  if (!guestName) {
   return Promise.reject("Guest name must not be empty");
  } else {
		return Promise.resolve(`Welcome ${guestName}`);
	}
};

makeGreeting("Mango")
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));

//-------------------------------------------------------------------------------------------------------------

//*Створення промісів із затримкою

//Це просто перевикористана функція, яка містить у собі код створення промісу із затримкою, щоб не писати цей код щоразу, коли потрібно створити проміс.

const makePromise = ({ value, delay, shouldResolve = true }) => {
  return new Promise((resolve, reject) => {
	   setTimeout(() => {
				if(shouldResolve) {
					resolve(value)
				} else {
					reject(value)
				}
			}, delay);
  });
};
//Перевіремо роботу данної функції нижче-таким чинном не потрібно писати код щоразу коли потрібно створити проміс
makePromise({ value: "A", delay: 1000 })
	.then(value => console.log(value)) // "A"
	.catch(error => console.log(error));

makePromise({ value: "B", delay: 3000 })
	.then(value => console.log(value)) // "B"
	.catch(error => console.log(error));

makePromise({ value: "C", delay: 2000, shouldResolve: false })
	.then(value => console.log(value)) 
	.catch(error => console.log(error)); // "C"

  
  
  
  //-------------------------------------------------------------------------------------------------------------
  //*Обробка множинних промісів

  //*Метод Promise.all() - дозволяє одночасно обробити кілька промісів та отримати їхні результати. Він приймає масив промісів як вхідні дані, чекає їх виконання та повертає один проміс.
  Promise.all([promise1, promise2, promise3, ...])

  Якщо всі проміси виконуються успішно, повернений проміс перейде у стан fulfilled, а його значенням буде масив результатів виконання кожного промісу.

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
	.then(values => console.log(values)); // [1, 2, 3]
	.catch(error => console.log(error));
  Це означає, що він чекає на виконання всіх промісів, а потім створює та повертає новий проміс, значенням якого є масив значень виконаних промісів.

  Якщо хоча б один із промісів відхиляється, повернений проміс одразу переходить у стан rejected, а його значенням буде помилка.
  const p1 = Promise.resolve(1);
  const p2 = Promise.reject("Rejected promise 2");
  const p3 = Promise.resolve(3);
  
  Promise.all([p1, p2, p3])
    .then(values => console.log(values))
    .catch(error => console.log(error)); // "Rejected promise 2"

    
  //-------------------------------------------------------------------------------------------------------------

  //*Метод Promise.allSettled()-також дозволяє одночасно обробити кілька промісів та отримати їхні результати. Відмінність від Promise.all полягає в тому, що метод Promise.allSettled() чекає виконання всіх промісів незалежно від того, чи були деякі або навіть всі проміси відхилені. Він приймає масив промісів як вхідні дані, чекає їх виконання та повертає один проміс.
  Повернутий проміс ніколи не буде відхилений, він завжди успішно виконується (стан fulfilled). Додавання методу catch навіть не має сенсу, оскільки він ніколи не виконається.
  const p1 = Promise.resolve(1);
const p2 = Promise.reject("Rejected promise 2");
const p3 = Promise.resolve(3);

Promise.allSettled([p1, p2, p3])
	.then(values => console.log(values));
	// [
	//   { status: "fulfilled", value: 1}, 
  //   { status: "rejected", value: "Rejected promise 2"},
  //   { status: "fulfilled", value: 3}
  // ]
  Значенням повернутого промісу буде масив об'єктів з результатами виконання кожного промісу.

  status — властивість, яка зберігає статус, з яким виконався проміс, це рядок "fulfilled" або "rejected".
  value — властивість, в якій зберігається значення, з яким виконався або був відхилений проміс.

  //-------------------------------------------------------------------------------------------------------------

  //*Метод Promise.race() - приймає масив промісів і повертає "найшвидший", тобто перший виконаний або відхилений проміс з переданих, разом зі значенням або причиною його відхилення.
  Promise.race([promise1, promise2, promise3, ...])

  Перший проміс перейде в стан fulfilled через 1 секунду (буде найшвидшим), і буде виконано колбек методу then зі значенням першого промісу, а решту буде відкинуто.
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(2), 2000);
  });
  
  Promise.race([p1, p2])
    .then(value => console.log(value)); // 1
    .catch(error => console.log(error));

Коли хоча б один проміс з масиву виконається, проміс, що повертається, перейде у стан resolved, а всі інші будуть відкинуті.











//Підсумок
синтаксис створення промісу? - const promise = new Promise((resolve, reject)=> {Asynchronous operation});
Що повертає виклик new Promise()? -Об’єкт
Який метод промісу використовується для обробки його результату? .then(onResolve, onReject)
Коли виконається колбек-функція, яка передається першим аргументом у метод then? - Після того, як проміс буде виконано успішно
На практиці в методі then() обробляють тільки успішне виконання промісу. Метод then() повертає проміс
Метод then() видає новий проміс, значення або статус помилки якого визначається результатом колбек-функції, переданої до методу then. Завдяки цьому можна створювати ланцюжки асинхронної обробки результатів через послідовні виклики методу then.
Значенням промісу, який поверне then, буде значення, яке поверне його колбек-функція в разі успішного виконання промісу, або помилка, яка виникне в разі невдачі. Таким чином, воно може бути будь-яким значенням або помилкою, залежно від того, як проміс був виконаний.
Помилка виконання промісу обробляють у спеціальному методі catch() для «відловлювання» помилок. Він йде після then().
Коли виконається функція, яка передається аргументом у метод catch? -Після того, як проміс буде виконано з помилкою
Що отримує функція, яка передається аргументом у метод catch? - Помилку, з якою виконався проміс
Метод .finally(() => {Promise fulfilled or rejected}) - необхідно виконати код після того, як проміс буде виконаний незалежно від результату (fulfilled або rejected). Після того, як проміс буде виконано успішно або з помилкою - виконається функція, яка передається аргументом у метод finally. Результат функції яка є аргументом в цьому методі отримає нічого.
Promise.resolve("success value")-створює проміс, який успішно виконаний із вказаним значенням.
Promise.reject("error") - створюється проміс, що виконався з помилкою
Promise.reject().then().catch(); - Проміс, створений за допомогою Promise.reject(), є відхиленим (rejected), і тому метод catch виконається для обробки цього відхилення. 
Функція makePromise(options), буде створювати і повертати проміси з різною затримкою виконання.


//Kahoot - Lesson 1
1) Який метод дає змогу запланувати одноразовий виклик функцій? - setTimeout(callback, delay);
2) Який метод дозволяє викликати функцію регулярно, повторюючи виклик через певний проміжок часу? - setInterval(callback,delay);
3) Що повертають методи setTimeout() і setInterval()? - Числовий ідентифікатор створеного таймера
4) Який метод зупиняє інтервал? - clearInterval(id)
5) У якій послідовні будуть виведені логи: ? - B > D > C > A
setTimeout(()=> console.log("A"), 2000);
console.log("B");
setTimeout(()=> console.log("C"), 1500);
console.log("D");

6)Що буде виведено у консоль? - A > C > B
console.log("A");
setTimeout(() => console.log("B"), 0); //не дивлячись на те що тут стоїть затримка в 0 мілісекунд, це не відміняє того факту що setTimeout це асинхрона операція - які виконуються в окрумій черзі в eventlope. Спочатку JavaScript виконує синхронний код, а потім асинхронний.
console.log("C");

7) Скільки разів у консоль виведеться рядок "Tick"? - 2 рази
const timerId = setInterval(()=>{
  console.log("Tick");
}, 2000);                    //через кожних 2 секунди в консолі повинно виводитись слово Tick, так як у нас нижче в коді setTimeout вказує що таймер повинен зупинитися через 5 секунд - Tick в консолі покажеться тільки 2 рази.
setTimeout(()=> {
  clearInterval(timerId);
}, 5000);

8)Що буде виведено у консоль? - 1 > 2 > 3
for (let i = 3; i > 0; i--) {                 // від 3 до 1
  const delay = i * 1000;                      // 3*1000=3000 мілісекунд, 2*1000=2000 мілісекунд, 1 * 1000 = 1000мілісекунд - по часу виведеться у консоль 1, потім 2, а далі 3.
  setTimeout(()=> console.log(i), delay);
}

9) Шо зберігають екземпляри класу Date? - Дата і час!
10) Екземпляр класу Date — це об'єкт, що відображає певний момент часу. Створення дати без аргументів повертає об'єкт, що зберігає дату і час на момент його ініціалізації, тобто поточні дату і час.
const date = new Date(); // покаже поточну дату і час!
console.log(date);

11) Що повертає Date.now()? - Кількість мілісекунд з півновночі 1 січня 1970 року.
12) Що буде результатом вираження віднімання 2-х дат? - Число
const start = new Date("2030-04-23");
const end = new Date("2030-05-17");
console.log(end - start); //коли javaskript бачить арефметичні операції, то важає що ви хочете знайти різницю в числах і сприймає як числа тому повертає число-різницю в часі

10e3 = 10000