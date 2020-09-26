// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:

// Функція яка виведе всю інформацію про тварину. Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день). Функція яка зможе змінити назву тварини на більш детальну. 

// let animal = {
//     name: 'Wolf',
//     age: 5,
//     weight: 50,
//     averageSpeed: 30
// }

// let showInfo = (obj) => {
//     for(let key in obj) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }

// let timeRun = (obj) => {
//     let distance = 990;
//     let maxTime = 12;
//     let days = 0;
//     if(obj.hasOwnProperty(`averageSpeed`)) {
//         let hours = (distance / obj.averageSpeed);
//         while(hours > maxTime) {
//             hours -=maxTime;
//             hours = hours.toFixed(1);
//             days++;
//         }
//         console.log(`${days} днів ${hours} годин`);
//     } else {
//         alert(`Не має інформації`);
//     }
// }

// let changeName = (obj, kingdom, type, clas) => {
//     if(obj.hasOwnProperty(`name`)) {
//         delete obj[`name`];
//         obj[`kingdom`] = kingdom;
//         obj[`type`] = type;
//         obj[`class`] = clas;

//         console.log(obj);
//     }
// }


// showInfo(animal);
// timeRun(animal);
// changeName(animal, `Живина`, `Хордові`, `Савці`);

// 2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.

// const figure = {
//     axisX: 6,   
//     axisY: 8,
//     figureSquare() {
//         let square;
//         if(this.axisZ) {
//             square = 2 * ( this.axisX * this.axisY + this.axisY * this.axisZ + this.axisZ  * this.axisX)
//         } else {
//             square = this.axisX * this.axisY;
//         }
//         return square;
//     },

//     figurePerimeter() {
//         let perimetr
//         if(this.axisZ) {
//             perimetr = 4 * (this.axisX + this.axisY + this.axisZ)
//         } else {
//             perimetr = this.axisX * 2 + this.axisY * 2;
//         }
//         return perimetr;
//     },

//     make3D(height) {
//         figure.axisZ = height;
//     },

//     getName(figureName) {
//         figure.name = figureName;
//     },

//     centimetersToMeters() {
//         let metr = 100;
//         if(this.axisZ) {
//             this.axisX /= 100;
//             this.axisY /= 100;
//             this.axisZ /= 100;
//         } else {
//             this.axisX /= 100;
//             this.axisY /= 100;
//         }
//     }
// }

// console.log(figure.figureSquare());
// console.log(figure.figurePerimeter());
// figure.make3D(4);
// figure.getName(`figure1`);
// figure.centimetersToMeters();


// console.log(figure);


// 3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )

// {

//   tomato: {

//     count: 5,
//     price: 50,
//     buy: false,
//     outOfstore: true

//   } , ...

// }

// Виводимо список покупок - спочатку ті які є в магазині потім яких немає, 
// Виводимо список покупок які ми купили.
// Додаємо функцію яка дозволить купити продукт.
// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// Додаємо можливість збільшувати кількість товару.
// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).

// let toBuyList = {
//     cheese: {
//         count: 3,
//         price: 60,
//         buy: false,
//         outOfStore: true
//     },

//     meat: {
//         count: 1,
//         price: 90,
//         buy: true,
//         outOfStore: false
//     },

//     banana: {
//         count: 6,
//         price: 20,
//         buy: false,
//         outOfStore: true
//     },

//     spaghetti: {
//         count: 2,
//         price: 40,
//         buy: true,
//         outOfStore: false
//     },

//     potato: {
//         count: 5,
//         price: 50,
//         buy: false,
//         outOfStore: true
//     },


// }


// // Виводимо список покупок - спочатку ті які є в магазині потім яких немає, 


// //Як я зрозумів 'outOfStore = false' - значить відсутність в магазині тому вивожу спочатку продукти в яких 'outOfStore = true'
// let showList = (obj) => {
//     for(let key in obj) {
//         if(obj[key][`outOfStore`] === true) {
//             console.log(`${key}: наявність в магазині ${obj[key][`outOfStore`]}`);
//         } 
//     }
//     for(let key in obj) {
//         if(obj[key][`outOfStore`] === false) {
//             console.log(`${key}: наявність в магазині ${obj[key][`outOfStore`]}`);
//         }  
//     }
// }

// // Виводимо список покупок які ми купили.
// let buyList = (obj) => {
//     for(let key in obj) {
//         if(obj[key][`buy`] === true) {
//             console.log(`${key} - куплено`);
//         }
//     }
// }

// // Додаємо функцію яка дозволить купити продукт.
// let buyProduct = (obj, nameProduct) => {
//     if(obj.hasOwnProperty(nameProduct)) {
//         if(obj[nameProduct].buy === false) {
//             if(obj[nameProduct].outOfStore === true) {
//                 obj[nameProduct].buy = true;
//                 console.log(`Ви купиил ${nameProduct}!!!`);
//             } else {
//                 console.log(`${nameProduct} немає в магазині`);
//             }
//         } else {
//             console.log(`Ви вже купили ${nameProduct}`);
//         }
//     } else {
//         console.log(`${nameProduct} немає у списку покупок`);
//     }
// }

// // Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// let pricePurchase = (obj) => {
//     let price = 0;
//     for(let key in obj) {
//         price += obj[key][`count`] * obj[key][`price`]; 
//     }
//     console.log(`Сума покупки становить ${price}`)
// }

// // Додаємо можливість збільшувати кількість товару.

// let increaseCount = (obj, nameProduct ,countProduct = 1) => {
//     if(obj.hasOwnProperty(nameProduct)) {
//         obj[nameProduct][`count`] += countProduct;
//         console.log(`Кількість товару ${nameProduct} збільшено до ${obj[nameProduct][`count`]}`);
//     } else {
//         console.log(`${nameProduct} немає у списку покупок`);
//     }
// }

// // Додаємо можливість зменшувати кількість товару(менше 0 бути не може).
// let reduceProduct = (obj, nameProduct, countProduct = 1) => {
//     if(obj.hasOwnProperty(nameProduct)) {
//         if(obj[nameProduct][`count`] >= countProduct) {
//             obj[nameProduct][`count`] -= countProduct;
//         console.log(`Кількість товару ${nameProduct} зменшено до ${obj[nameProduct][`count`]}`);
//         } else {
//             console.log(`Не можна зменшити менше 0`);
//         }
//     } else {
//         console.log(`${nameProduct} немає у списку покупок`);
//     }
// }



// showList(toBuyList);

// buyList(toBuyList);

// buyProduct(toBuyList, `potato`);

// pricePurchase(toBuyList);

// increaseCount(toBuyList, `potato`, 3);

// reduceProduct(toBuyList, `potato`, 5);

// console.log(toBuyList);


// 4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.

let workers = [
    {
        name: `Yura`,
        age: 55, 
        hobby: [`films`, `games`, `serials`], 
        type: `Admin`
    },

    {
        name: `Taras`,
        age: 19, 
        hobby: [`football`, `hiking`], 
        type: `User`
    },

    {
        name: `Oleg`,
        age: 25, 
        hobby: [`pinpong`, `football`, `hiking`], 
        type: `User`
    },

    {
        name: `Taras`,
        age: 21, 
        hobby: [`films`, `games`], 
        type: `Admin`
    },
];


// Вивести всіх адмінів.
let showAdmin = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].type === `Admin`) {
            console.log(`${arr[i].name} є ${arr[i].type}`);
        }
    }
}

// Вивести середній вік усіх працівників.
let averageAge = (arr) => {
    let avgAge = 0;
    for(let i = 0; i < arr.length; i++) {
        avgAge += arr[i].age;
    }
    avgAge = Math.round(avgAge /= arr.length);
    console.log(`Середній вік усіх працівників = ${avgAge}`);
}

// Вивести тільки унікальні хоббі працівників. 
let uniqueHobby = (arr) => {
    let arrHobby = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].hobby.length; j++) {
            arrHobby.push(arr[i].hobby[j]);
        }
    }
    let arrUniqueNobby = [...new Set(arrHobby)];
    console.log(arrUniqueNobby);
}

showAdmin(workers);
averageAge(workers);
uniqueHobby(workers);