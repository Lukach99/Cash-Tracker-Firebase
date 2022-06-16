import axios from "axios";
import { BASE_API_URL } from "../constants/api.constants";
import { Expense, TExpense } from "../models/expense.model";
import HttpClient from "./generic.http";


class ExpensesHttp extends HttpClient{
    constructor(){
        super(BASE_API_URL)
    }
    
    public async getExpenses(): Promise<Expense[]> {
        const { data } = await axios.get(this.url("/expenses"));
        const expenses: Expense[] = data.map((expense: TExpense) => new Expense(expense))

        return expenses
    }

    public async createExpense(expense: TExpense): Promise<Expense> {
        const { data } = await axios.post(this.url(`/expenses`), expense);
    
        return new Expense(data);
      }

    public async deleteExpense(id: number | undefined): Promise<Object> {
        const { data } = await axios.delete(this.url(`/expenses/${id}`));
    
        return data;
      }

    public async updateExpense(id: number, body: any): Promise<Expense> {
        const { data } = await axios.patch(this.url(`/expenses/${id}`), body);
    
        return new Expense(data);
      }

    
}

export default ExpensesHttp