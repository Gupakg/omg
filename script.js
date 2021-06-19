//======== Циклы=====
// Цикл выполняеться до тех пор пока в условия возвращается -true




// let num = 10

// while (num > 0) {
//     num = num -1  // укоротить n--
//     console.log(num)
// }


// let num = 0
// while (num < 10) {
//     console.log(num) // укоротить n++
//     num = num + 1
// }

// let i = 3
// while(i) console.log(i--)
// 0 -false и не показывает. True показывает

// while (true) {
//     console.log('hi') //бесконечно цикл. нельзя запускать!
// }

// let num = 5

// while (true) {  // На условии стоит true, бесконечно!
//     console.log(num) 
//     num--
//     if (num == 0) {
//         break //STOP остановка цикла
//     }
    
// }

// let num = 10

// while (num <= 10) { //бесконечный цикл
//     console.log(num)
//     num--
// }


// Деление % - показывает только остаток

// let num = 2      //Если добавим, то бесконечный цикл

// while (num <= 10) {      //условие правильно
//     if (num % 2 == 0){    //четная цифра
//     continue
// }
//     num++                   // увеличиваем чисел: 2,3,
//     console.log(num)
// }


// let num = 0    

// while (num <= 10) {      //условие правильно
//     num++                   // увеличиваем чисел: 2,3,
//     if (num % 2 == 0){    //нечетное число
//     continue               //-начать интеррацию цикла заново, прогнорируя осташийся код
// }
//     console.log(num)
// }

// //====== do=While=====
// do {
//     //тело цикла
// }while()//условие

// let i = 0

// do {
//     console.log(i)
//     i++
// } while (i < 3)

//======

// let num = 5

// do {
//     console.log(num) // показывает и перестает выполнять дальше
// } while (false)


//=======Не исползуется!
// // prompt()

// let num = prompt('Введите число 100')

// do {
//     num = prompt('Введите число 100')
//     // (i >= 100)
//     //     alert('Введите правильное число')
// } while (i < 100)

//======for=====


// for (начало; условие; шаг) {
//     тело цикла
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }


// for (let i = 1;  i < 10 ; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     } 
// }


// let num = prompt('Введите число...')
// let i = 0
// while (i < 3) {
//    console.log('number ${1}') или
//    console.log('number' + i + '!')
//    i++
// }

// console.log(Math.floor(Math.random()*10))
// for (let i = 0; i < 5; i++){
//     console.log(Math.random()*10)
// }

// for (let i = 1; i < 10; i++) {
//     let num = Math.floor(Math.random()*100)
//     if (num % 2 == 0) {
//         console.log('even')
//     } else {
//         console.log(num)
//     }
// }


// Вызов событий====

// 1. в HTML
// const start = () => {
//     alert('start')
// }

// 2.JS
// btn.onclick = start
// const btn = document.querySelector('button')

//3. get. event : 2 параметра
// bnt.addEventListener('click', start)

//2 фукции вызвать
// const btn = document.querySelector('button')

// bnt.addEventListener('click', () =>{
//     start()
//     hi()
// })

// bnt.addEventListener('click', (event) =>{
//  console.log(event)
// })

// windows.addEventListener('keydown', (event) =>{
//   console.log(event)
// })

const btn = document.querySelector('button')

window.addEventListener('keydown', (event) =>{ 
    console.log(event)
    if(event.code = '189'){
        document.body.style:'red'
    }
})











