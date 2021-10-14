import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stud ,Att} from './modal';

@Injectable({
  providedIn: 'root'
})
export class StudService {
  studData:Array<Stud> = [];
  constructor(private http:HttpClient) { }
  saveStud(stud:Stud){
    // this.userData.push(user)
    return this.http.post(`https://61655a84cb73ea0017641f65.mockapi.io/stud`,stud)
  }
  saveatt(obj:Att)
  {
    return this.http.post(`https://61655a84cb73ea0017641f65.mockapi.io/attendance`,obj)
  }
  getAllAtt(){
    return this.http.get<Array<Att>>(`https://61655a84cb73ea0017641f65.mockapi.io/attendance`)
  }
  getAllStud(){
    return this.http.get<Array<Stud>>(`https://61655a84cb73ea0017641f65.mockapi.io/stud`)
  }
  getStudByID(id:number){
    return this.http.get<Stud>(`https://61655a84cb73ea0017641f65.mockapi.io/stud/${id}`)
  }

  updateStudById(userId:number,userdata:Stud){
    return this.http.put(`https://61655a84cb73ea0017641f65.mockapi.io/stud/${userId}`,userdata)
  }

  deleteUserById(id?:number){
    return this.http.delete(`https://61655a84cb73ea0017641f65.mockapi.io/stud/${id}`)
  }
}
