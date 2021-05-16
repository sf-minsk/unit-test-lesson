import {addFriends, calculator, rest, students, StudentType, sum} from "./tasks"

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


test('friends of students', () => {
    const resStudents: StudentType[] = addFriends(students)
    for (let i = 0; i < resStudents.length; i++) {
        expect(resStudents[i].friends?.length).toBe(students.length - 1)
        const friends: any = resStudents[i].friends
        for (let j = 0; j < friends.length; j++) {
            expect(friends[j] === resStudents[i].name).toBe(false)

        }
    }
})





