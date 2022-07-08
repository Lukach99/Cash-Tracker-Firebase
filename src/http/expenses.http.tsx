import axios from "axios";
import { BASE_API_URL } from "../constants/api.constants";
import { Expense, TExpense } from "../models/expense.model";
import { TUserAccount } from "../models/userAccount.model";
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
        const expenses: Expense[] = Object.keys(data).map((key: string) => new Expense(data[key], key))
        return expenses
    }

    public async createExpense(expense: Expense, username = "expenses") {
        const { data } = await axios.post(this.url(`/${username}.json`), expense);
        
      }

    public async deleteExpense(id: string , username = "expenses"): Promise<Expense> {
        const { data } = await axios.delete(this.url(`/${username}/${id}.json`));
    
        return data;
      }

    public async updateExpense(id: string | undefined, body: any, username = "expenses") {
      console.log(id)
        const { data } = await axios.patch(this.url(`/${username}/${id}.json`), body);
    
      }


      /* create user */
      public async createUser(userinfo: TUserAccount) {
        const { data } = await axios.post(this.url(`/users.json`), userinfo);
        
        return data
        
      }

      public async getUser() {
        const { data } = await axios.get(this.url("/users.json"));
        return data
    }

    public async getUserInfo(query:string){
      const { data } = await axios.get(this.url(`/users.json?orderBy="username"&equalTo="${query}"&print=pretty`));
      
      return Object.values(data)[0]
  }

    
}

export default ExpensesHttp