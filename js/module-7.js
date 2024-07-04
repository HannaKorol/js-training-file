//*Створення та видалення елементів                                -continuation......................


Властивість innerHTML :

1)зберігає вміст елемента, включно з тегами, у вигляді рядка.
2) Значення, що повертається, — це завжди валідний HTML-код.
3)доступна і для читання, і для запису
4) Якщо у властивість innerHTML записати порожній рядок, то вміст елемента буде очищено.
5) Використовуй властивість element.innerHTML для додавання тільки у разі, 
— коли елемент element порожній або
— якщо потрібно повністю замінити вміст element

constarticle = document.querySelector(".article"); 
console.log(article.innerHTML);

consttitle = document.querySelector(".article .title"); 
console.log(title.innerHTML);//call
title.innerHTML='New and <span class="accent">improved</span> title'; // change the definition



МетодinsertAdjacentHTML()- метод для додавання рядка з HTML-тегами перед, після або всередину елемента.
element.insertAdjacentHTML(position, string)

position — це рядок, який визначає позицію щодо елемента element.
"beforebegin" — передelement (працюють тільки тоді, коли element вже знаходиться в DOM-дереві.)
"afterbegin" — всередині element, перед усіма дітьми (працюють тільки тоді, коли element вже знаходиться в DOM-дереві. )
"beforeend" — всередині element, після усіх дітей
"afterend" — післяelement




//*Події 

1)це сигнал від браузера про те, що на вебсторінці щось відбулося.
2)Події використовуються для реакції на дії користувача й виконання коду, пов'язаного з певною подією.

Для того щоб елемент реагував на дії користувача, до нього необхідно додати слухача події та визначити йому обробника.


МетодaddEventListener() - додає слухача події на елемент.
            element.addEventListener(event, handler, options)

Аргументи методу:
event — рядок, що містить ім'я події, наприклад, "click"
handler — колбек-функція, яка буде викликана під час настання події
options — необов'язковий об'єкт параметрів із розширеними налаштуваннями
const button = document.querySelector(".my-button");
button.addEventListener("click", () => {
  console.log("The button was pressed and now the next image will appear");
});

Як для елемента myElement призначити обробником події "click" функцію myFunction?
- myElement.addEventListener("click", myFunction)



Метод removeEventListener()- видаляє слухача події з елемента.
           element.removeEventListener(event, handler, options)
З цієї причини рекомендовано для обробників подій використовувати іменовані функції, які можна легко передавати як аргументи.
const button = document.querySelector(".my-button");
const handleClick = () => {
  console.log("The button was pressed and now the next image will appear");
};
button.addEventListener("click", handleClick);

Об'єкт події - Він містить інформацію про саму подію, таку як тип події і об'єкт, що викликав подію.
Як можна отримати доступ до об'єкта події в обробнику події?
Він автоматично передається як аргумент у функцію обробника події.

Кожна подія — це об'єкт, який містить інформацію про деталі події та 
автоматично передається першим аргументом в обробник події. Усі події 
відбуваються з базового класу Event.

Параметр event — це і є об'єкт події, який автоматично 
передається першим аргументом під час виклику колбек-функції. Ми можемо 
називати його як завгодно, але, як правило, його оголошують як e, evt або event.

const handleClick = event => {
  console.log(event);
};
button.addEventListener("click", handleClick);


event.type — тип події.
event.currentTarget — елемент, на якому виконується обробник події.


document.style.backgraund = // стилі задаються в Java Script якщо вони динамічні, тобто змінюються від фунцуії що задана в  Java Scriptю



//*Події клавіатури 