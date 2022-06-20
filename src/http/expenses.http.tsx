import axios from "axios";
import { BASE_API_URL } from "../constants/api.constants";
import { Expense, TExpense } from "../models/expense.model";
import HttpClient from "./generic.http";


class ExpensesHttp extends HttpClient{
    constructor(){
        super(BASE_API_URL)
    }
    
    public async getExpenses(username = "expenses"): Promise<Expense[]> {
        const { data } = await axios.get(this.url(`/${username}.json`));
        if(!data){
          return []
        }
        const resultKeys = Object.keys(data)
        const result = Object.values(data)
        console.log({key : resultKeys})
        const expenses: Expense[] = resultKeys.map((key: string) => new Expense(data[key], key))
        const entries = Object.entries(data)
        console.log({expenses: expenses})
        return expenses
    }

    public async createExpense(expense: TExpense, username = "expenses") {
        const { data } = await axios.post(this.url(`/${username}.json`), expense);
    
        
      }

    public async deleteExpense(id: string | undefined, username = "expenses"): Promise<Object> {
        const { data } = await axios.delete(this.url(`/${username}/${id}.json`));
    
        return data;
      }

    public async updateExpense(id: string, body: any, username = "expenses") {
      console.log(id)
        const { data } = await axios.patch(this.url(`/${username}/${id}.json`), body);
    
       
      }


      /* create user */
      public async createUser(userinfo: any, username:string) {
        const { data } = await axios.post(this.url(`/users.json`), userinfo);
        
        return data
        
      }

      public async getUser(): Promise<any> {
        const { data } = await axios.get(this.url("/users.json"));
        
        return data
    }

    
}

export default ExpensesHttp