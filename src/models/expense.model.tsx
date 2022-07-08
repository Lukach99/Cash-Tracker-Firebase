export type TExpense = {
    id?: string,
    firebaseId?: string
    type: string,
    overview: string,
    price: string,
    date: string,
}

export class Expense{
    id: string 
    type: string
    overview: string
    price: string
    date: string

    constructor(expense: TExpense, firebaseId: string){
        this.id = firebaseId
        this.type = expense.type
        this.overview = expense.overview
        this.price = expense.price
        this.date = expense.date
    }
}