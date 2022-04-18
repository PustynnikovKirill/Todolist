import {ActionType, div, mult, salaryReducer, StateType, sub, sun} from "./tasks";


test("sun",() => {
    const salary: number = 800
    const n: number = 200
    // 2. Выполнение
    const result = sun(salary,n)
    // 3. Проверка результата
        expect(result).toBe(1000)
})

test('subziro', ()=>{

    expect(sub(1200,200)).toBe(1000)
})

test ('divYes', ()=>{
    expect(div(500,2)).toBe(250)
})

test ("MULTIK", ()=>{
    const salary:number = 4
    const n:number = 2

    const result = mult(salary,n)
    expect(result).toBe(8)
})


test ("case Sum",()=>{
    const salary:StateType = 800
    const action:ActionType ={
        type:"SUM",
        n:200
    }
    const testAction:ActionType = {
        type:"TEST",
        n:200
    }
    const result = salaryReducer (salary,action)
    expect(result).toBe(1000)
    expect(salaryReducer(salary,testAction)).toBe(salary)

})
test("DIVCHICK", ()=>{
    const salary:StateType = 1000
    const action: ActionType = {
        type:"DIV",
        n:200
    }
    const result = salaryReducer(salary,action)
    expect(result).toBe(5)
})