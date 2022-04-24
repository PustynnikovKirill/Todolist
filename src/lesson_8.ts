// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<any>): number {
    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((acc, summ) => (acc + summ))
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let r = a + b > c && b + c > a && a + c > b
    if (r && (a === b && b === c)) return "10"
    else if (r && (a === b || b === c || a === c)) return "01"
    else if (r) return "11"
    else if (r === false) return "00"
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let newNumber = String(number).split("")
    let x = newNumber.map(el => Number(el)).reduce((acc, sel) => acc + sel)
    return x
    // let newNam = String(number)
    // let sum = 0
    // for (let i = 0; i < newNam.length; i++)
    //     sum += Number(newNam[i])
    // return sum
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {

    let sum = arr.reduce(
        (pref, curr, index) =>
            index % 2 === 0
                ? {...pref, sumOdd: pref.sumOdd + curr}
                : {...pref, sumOll: pref.sumOll + curr},
        {sumOdd: 0, sumOll: 0}
    )
    return sum.sumOdd > sum.sumOll
}

// let sum1 = 0;
// let sum2 = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         sum1 += arr[i]
//     } else {
//         sum2 += arr[i]
//     }
//
// }
// //...здесь пишем код.
// // В return стоит "заглушка", чтоб typescript не ругался
// return sum1 > sum2


// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return array.map(el => Math.pow(Math.floor(Math.abs(el)), 2))
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {

    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return 0
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    const result = [];
    if (amountOfMoney > 0) {
        for (let i = 0; i < banknotes.length; i++) {
            let not = banknotes[i]
            while (amountOfMoney-not >= 0){
                amountOfMoney -= not;
                result.push(not)
            }
        }
    } else {console.log("stop")}
    return result
}
