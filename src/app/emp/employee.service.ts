import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private url='http://localhost:3000';

  constructor(private http:HttpClient) { }

  getEmployee():Observable<any>{
    return this.http.get(`${this.url}/employee/showAll`);
  }
  addEmployee(employee:any):Observable<any>{
    return this.http.post(`${this.url}/employee/add`,employee);
  }

  deleteEmployee(id:any):Observable<any>{
    return this.http.delete(`${this.url}/employee/delete/${id}`);
  }

  updateEmployee(id:any,employee:any):Observable<any>{
    return this.http.put(`${this.url}/employee/update/${id}`,employee);
  }
}
