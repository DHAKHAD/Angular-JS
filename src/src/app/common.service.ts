import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
resto="http://localhost:3000/restaurant";
user="http://localhost:3000/users";
  constructor(private _http:HttpClient) { }
  signup(data:any){
    return this._http.post(this.user,data);
  }
  getUser(){
    return this._http.get<any>(this.user);
  }
  getRest(){
    return this._http.get<any>(this.resto);
  }
  addRest(data:any){
    return this._http.post(this.resto,data);
  }
  updateRest(id:any,data:any){
    return this._http.put(`${this.resto}/${id}`,data)
  }
  getData(id:any){
    return this._http.get(`${this.resto}/${id}`)
  }
  deleteRest(id:any){
    return this._http.delete(`${this.resto}/${id}`)
  }
}
