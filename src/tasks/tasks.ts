export const sum = (a:number, b:number): number => {
    return a + b
}
export const mult = (a:number, b:number): number => {
    return a * b
}
export const div = (a:number, b:number): number => {
    return a / b
}
export const sub = (a:number, b:number): number => {
    return a - b
}



export const rest = (...numbers: Array<number>) => {
    return numbers.reduce((acc,el) => acc + el)
}

export type ActionType = {type: 'sum' | 'mult' | 'div' | 'sub'}

export const calculator = (a: number, b:number, action: ActionType) => {
 switch (action.type) {
     case "sum":
         return a + b
     case "mult":
         return a * b
     case "div":
         return a / b
     case "sub":
         return a - b
     default:
         return
 }
}



export type StudentType ={
    name: string
    age: number
    isMarried: boolean
    scores: number
    friends?: Array<string>
}


export const students: Array<StudentType> = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

export const addFriends = (students:Array<StudentType>):Array<StudentType> => {
    return students.map(st => ({...st, friends: students.map(st => st.name).filter(name => name !== st.name)
    }))
}
console.log(addFriends(students));