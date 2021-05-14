import {calculator, rest, sum} from "./tasks"

// test('sum of two numbers', () => {
//     // 1. Тестовые данные
//     const a: number = 10
//     const b: number = 8
//     // 2. Выполнение тестируемого кода с тестовыми данными
//     const result = sum(a,b)
//     // 3. Проверка ожидаемого результата
//     expect(result).toBe(18)
// })

test('sum of two numbers', () => {
    expect(sum(10, 8)).toBe(17)
})


test('sum of several numbers', () => {
    expect(rest(10, 8)).toBe(18)
    expect(rest(10, 8, 2)).toBe(20)
    expect(rest(10, 8, 2, 5)).toBe(25)
})

test('calculator', () => {
    expect(calculator(2, 3, {type: 'sum'})).toBe(5)
    expect(calculator(2, 3, {type: 'mult'})).toBe(6)
    expect(calculator(3, 2, {type: 'div'})).toBe(1.5)
    expect(calculator(2, 3, {type: 'sub'})).toBe(-1)
})

export type StudentType = {
    name: string
    isStudent: boolean
    friends: Array<string>
}


export const addFriends = (students:Array<StudentType>):Array<StudentType> => {
    return students.map(st => ({
        ...st,
        friends: students.map(st => st.name).filter(name => name !== st.name)
    }))
}