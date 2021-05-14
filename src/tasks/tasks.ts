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