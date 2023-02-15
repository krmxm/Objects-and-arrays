"use strict";

// Объекты, деструктуризация объектов

// Объекты - структуры, которые могут сохранять любые типы данных в формате
// ключ - значение. Они могут быть вложенные, объекты в объекты, масивы в объекты.

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(options["colors"]["border"]); // black

//  delete options.name; // метод удаляет свойство объекта

 // приямых констант в JavaScript не существует

//  console.log(options);

//  перебор объекта с помощью for in

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             // перебра объекта внутри объекта
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

// функции и методы внутри объекта

// let counter = 0;
// for (let key in options) {
//     // if (typeof(options[key]) === 'object') {
//     //     for (let i in options[key]) {
//     //         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     //     }
//     // } else {
//     //     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     // }
// }

// console.log(counter); // счетчик количества свойств

// метод Object.keys()



const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test"); // метод внутри объекта
    }
};

options.makeTest(); // Test

// console.log(Object.keys(options)); // [ 'name', 'width', 'height', 'colors' ], встоеннный метод в JavaScript

// console.log(Object.keys(options).length); // 4, встроенное свойсто

// диструктуризация

const {border, bg} = options.colors;
console.log(border); // black


// передача по ссылке или по значению, Spread оператор

// const copy = options; // ссылка

function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj [key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers); // поверхностная копия
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add)); // в объект добавляется объект

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

// копии массивов

const oldArray = ['a' , 'b', 'c'];
// const newArray = oldArray; // ссылка на массив
const newArray = oldArray.slice(); // вставляется массив из oldArray

newArray[1] = 'streaersgvv';
console.log(oldArray); // [ 'a', 'b', 'c' ]
console.log(newArray); // [ 'a', 'streaersgvv', 'c' ]


const video = ['youtube' , 'vimeo', 'rutue'],
blogs = ['wordpress', 'livejournal', 'blogger'],
internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet); // все элементы массива в одном массиве

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5 ,7];

log(...num);

// 2
// 5
// 7

const array = ["a", "b"];

const newAaray = [...array]; // копия массива

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

// массивы и псевдомассивы

const arr = [1, 2, 3, 6, 8];

console.log(arr.length); // length = последений порядковый номер - 1

// arr.pop(); // удаляет последние элемент массива
// arr.push(); // добавляет элемент в конец массива

// console.log(arr);

// методы перебора массива

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); // выводит все элементы массива
// }

for ( let value of arr) {
    console.log(value); // выводит все элементы массива
} // можем использовать break и continue

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// метод это функций, функция принимает в себя call-back функцию.
// метод forEach, внутри функция, которая будет выполнятся для каждого элементы массива
// item - тот элемент, который мы сейчас перебираем, i - номер по порядку, arr - ссылка на массив
// 0: 1 внутри массива 1,2,3,6,8 

// методы массива

// const str = prompt ("", "");
// const products = str.split(", ");
// console.log(products); // строку преваращем в массив

const str = prompt ("", "");
const products = str.split(", ");
products.sort(); // сортировка в алфавитном порядке
console.log(products.join('; ')); // массив преварщаем в строку

arr.sort(compareNum); // сортирует числа по порядку

function compareNum(a, b) {
    return a - b;
}