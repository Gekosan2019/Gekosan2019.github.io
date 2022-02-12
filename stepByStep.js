// Переменные
//var name = 'Shamil'
//const d = true
//let age = 19
/* Разница если не вдаваться в подробности: если через var, то можно менять на другое значение
если const, то менять нельзя. let как и var, менять можно. var лучше не использовать
ЛУЧШЕ ВСЕГДА const
 */

/*
console.log(name)
// В JS нет строгой типизации. То есть тип переменной можно менять по ходу работы
const lastName = prompt('Введите инфу о себе')
alert(name + ' ' + lastName)aw
dawd ad awwd ad aw a
// Операторы - все знаешь их
const a = 5
// Типы данных - bollean, string, number, undefined, null
// == - приводит к одному типу и сравнивает, === - сравнивает ещё и по типу данных

  /* function calculateAge(year) {
  return 2020 - year;
 }
 const d
   daw    dawd awyAge = calculateAge(prompt('Введите год'))
console.log('Разница равна ' + myAge)

const cars = ['Lol', 'kek', 'loool']
cars[0] = 'fuck'
Мы можем расширять массив:
cars[cars.length] = 'boom'
for (let car of cars) {
  console.log(car)
}
 */

// Объекты

/*
const person = {
  username: 'Shamil',
  surname: 'Shundalov',
  year: 2002,
  languages: ['Russian', 'English'],
  isStudent: true,
  gay: function () {
    console.log(' I am GAY')
  }
}

person.gay()
console.log(person.username)
console.log(person.isStudent)
const key = 'languages'
console.log(person[key])
 */

//let name = "Shamil"
//let age = 19
//const output = `Hello, My name is ${name}. I am ${age} age and i love big boops`

//---------------------------------------------------------------
/*
function infoPerson(s, name, age) {
  return `${s[0]}${name}${s[1]}${age}`
}
const name = 'Shamil'
const age = 19
const output = infoPerson`Имя ${name}, Возраст: ${age}`
console.log(output)
 */

//-----------------------------------------------------------------------
// Function Declaration
/*
function greet(name) {
  console.log('Привет - ', name)
}

//Function Expression
const greet2 = function greet2(name) {
  console.log("Helloo bitch - ", name)
}

setInterval(function () {
  console.log("Тест на пидора")
  if (Math.random() * 100 > 30) {
    console.log("PIDOR")
  } else {
    console.log("NO PIDOR")
  }
}, 1200)
 */

// Стрелочные функции
/*
const arrow = (name) => {
  console.log("hello " + name)
}
arrow("Shamil")
const pow2 = num => num ** 2
console.log(pow2(2))
 */
 // Параметры по умолчанию
/*
const sum = (a = 2, b = 1) => a + b
console.log(sum(22))

 function sumAll(...all) {
  let result = 0
   for (let num of all) {
     result += num
   }
   return result
 }
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8))
// Замыкание
function createMember(name) {
  return function (lasName) {
    console.log(name + " " + lasName)
  }
}
const longWithLastName = createMember("Shamil")
console.log(longWithLastName("Shundalov"))
 */

// Массивы

//const cars = ['Мазда', 'Форд', 'БМВ']
//cars.push('MUR') // добавили в конец
//cars.unshift('Volga') // добавили вначало
//const firstItem = cars.shift() // удалили первый и сохранили
//const lastItem = cars.pop() // удалили последний и сохранили
//const fib = [1, 1, 2, 3, 5, 8]
//console.log(cars)

//let str = "Hello, I love my life!"
//let strNew = str.split("").reverse().join("")
//console.log(strNew)

/*
const people = [
{name: 'Vladilen', budget: 4200},
{name: 'Shamil', budget: 2500 },
  {name: 'Misha', budget: 1200},
  ]

const person = people.find(person => person.budget === 4200)
console.log(person)
const upperCasePeople = people.map(person => person.name.toUpperCase())
console.log(upperCasePeople)

const pow2 = person => person.budget ** 2
const pow2Fib = people.map(pow2)
console.log(pow2Fib)
 */

// Объекты
const person = {
  name : "Shamil",
  isStudent: true,
  age: 19,
  languages: ["Russian", "English"],
  "key":"value",
  greet() {
    console.log("Hello!!")
  },
  info(){
    console.info("Inf about person: ", this.name)
  }
}
delete person.key // вообще пропадет ключ и значение из объекта

//const {name, age:personAge, languages} = person
//console.log(name, personAge, languages)

//for(let key in person) {
  //if (person.hasOwnProperty(key)) {
    //console.log(person[key])
  //}
//}
//Object.keys(person).forEach((key) => console.log(person[key]))

// Context
//person.info()

const logger = {
  keys() {
    console.log("Obj Keys: ", Object.keys(this))
  },
  // Используем анонимные функции с контекстом все нормально, но если бы создали по классике через function(), то тогда бы функция создала бы свой контекст
  //  и пришлось бы дорабатывать функцию
  keyAndValues() {
    Object.keys(this).forEach(key => console.log(`"${key}" : ${this[key]}`))
  },
  withParams(top = false, between = false, bottom = false) {
    if(top) {
      console.log("----START----")
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`"${key}" : ${this[key]}`)
      if(between && index !== array.length - 1) {
        console.log("-------------")
      }
    })
    if (bottom) {
      console.log("----END------")
    }
  }
}
// bind() - привязывает определенный контекст, который мы сами выберем
// Благодаря этому в this у нас привязывает значение, которое передадим
// Несмотря на то, что keys ничего не знает о person, она выводит его ключи
//const bound = logger.keys.bind(person)
//bound()

//logger.keys.call(person) // То же самое, что и bind(), только она сразу вызывается
//logger.keyAndValues.call(person)
//logger.withParams.apply(person, [true, true, true])  // То же самое, что и  call, только принимает всегда
// два параметра, второй параметр массив. А call принимает сколько хочешь параметров.

// ------------------------------------------------------------------------------------
// Асинхронность
// Event Loop

//setTimeout(() => {
  //console.log("After Timeout")
//}, 2500)
//let time = 0
//const interval = setInterval(() => {
  //console.log("After timeout")
  //time += 1
  //if (time === 5)
    //clearInterval(interval)
//}, 1000)

// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait)
// }
// delay(() => {
//   console.log("After timeout")
// }, 2000)

const delay = (wait = 7000) => {
  const promise =  new Promise((resolve, reject)  => {
    setTimeout(() => resolve, wait)
  })
  return promise
}

//delay(2500).then(() => {
  //console.log("After 2 seconds")
//}).catch(err => console.error(err)).finally(() => console.log("Finally"))
/*
const getData = () => new Promise(resolve => resolve([1,2,3,5,8]))
//getData().then(data => console.log(data))

async function asyncEx() {
  try{
    await delay(3000)
    const data = await getData()
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}
asyncEx()
 */
// Где можно встретить асинхронность: практически где угодно, например,
//в аякс запросе: асинхронные запросы, которые JS в фоне браузера может отправлять на удаленный сервер
// и без перезагрузки страницы получать обратно в браузере(ТО ЧТО НУЖНО МНЕ КАК РАЗ СДЕЛАТЬ)

// -------------------------------------------------------------------------------
const heading1 = document.getElementById("lol")
//const heading2 = document.getElementsByClassName("h2-class")[0]
// Для поиска элементов в html его используем "nameTeg", ".class", "#id" - как искать элементы по тегу, классу, id
const heading2 = document.querySelector(".h2-class") // Всегда один элемент, первый попавшийся
// Находим следующий элемент после heading2
const heading3 = heading2.nextElementSibling
const link = heading3.querySelector("a") // heading3.children[0]
setTimeout( () =>
{
  addStylesTo(link, "B")
}, 2000)

setTimeout( () =>
{
  addStylesTo(heading2, "G", "yellow", "2rem")
}, 1000)

link.addEventListener("click", (event) => {
  event.preventDefault()
  console.log("CLICK", event.target.getAttribute("href"))
  const url = event.target.getAttribute("href")
  window.location = url
})

setTimeout( () =>
{
  addStylesTo(heading1, "L", "red")
}, 3000)

function  addStylesTo(node, text, color = "green", fontSize) {
  node.textContent = text
  node.style.color = color
  node.style.textAlign = "center"
  node.style.backgroundColor = "black"
  node.style.display = "block"
  node.style.width = "100%"
  if(fontSize ) {
    node.style.fontSize = fontSize
  }
}

heading1.onclick = () => {
  if (heading1.style.color === "red") {
    heading1.style.color = "black"
    heading1.style.backgroundColor = "white"
  } else {
    heading1.style.color = "red"
    heading1.style.backgroundColor = "black"
  }
}

heading2.addEventListener("copy", () => {
  if (heading2.style.color === "yellow") {
    heading2.style.color = "black"
    heading2.style.backgroundColor = "white"
  } else {
    heading2.style.color = "yellow"
    heading2.style.backgroundColor = "black"
  }
})

// Ознакомиться со справочником по событиям

// async - гарантирует, что функция верёнт промис
// await работает

 /*
  class Menu {
  handleEvent(event) {
  // mousedown -> onMousedown
  let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
  this[method](event);
}

  onMousedown() {
  elem.innerHTML = "Кнопка мыши нажата";
}

  onMouseup() {
  elem.innerHTML += "...и отжата.";
}
}

  let menu = new Menu();
  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);
  */

const delay2 = (ms = 2000) => {
  return new Promise( f => setTimeout(() => f(), ms))
}
const url = "http://localhost:8080/users"
async function fetchTodos() {
  const response = await fetch(url)
  return await  response.json()
}

function getName() {
  let countUser = 0
  if (countUser === 0 ) {
    countUser += 1
    return fetchTodos()[0].username
  } else {
    return fetchTodos()[1].username
  }
}

function getId() {
  let countUser = 0
  if (countUser === 0 ) {
    countUser += 1
    return fetchTodos()[0].id
  } else {
    return fetchTodos()[1].id
  }
}

