import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  baseUrl = 'https://studentia-api.herokuapp.com/api/';


  constructor(private http: HttpClient) { }

  getAllStudents(){
    const options = {
        headers: new HttpHeaders({
          'Content-Type':'application/json'
      })
    }
      return this.http.get(this.baseUrl+'students',options )
    }

   getStudentId(_id: any){
    const options = {
        headers: new HttpHeaders({
          'Content-Type':'application/json'
      })
    }
  return this.http.get(this.baseUrl+`student/${_id}`,options)
    }

   EditStudentId(_id: any, body:any){
    const options = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
    })
  }
  return this.http.put(this.baseUrl+`student/${_id}`,body,options) 
  }

  createNew(studentForm: any){
    const options ={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
    return this.http.post(this.baseUrl+'student', studentForm, options)
  }
  

  
  delStudentById(_id: any){
     const options ={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  return this.http.delete(this.baseUrl+`student/${_id}`, options) 
  }
}

