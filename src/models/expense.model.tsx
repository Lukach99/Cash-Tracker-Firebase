export type TExpense = {
    id?: number,
    type: string,
    overview: string,
    price: string,
    date: string,
}

export class Expense{
    id?: number
    type: string
    overview: string
    price: string
    date: string

    constructor(expense: TExpense){
        this.id = expense.id
        this.type = expense.type
        this.overview = expense.overview
        this.price = expense.price
        this.date = expense.date
    }
}