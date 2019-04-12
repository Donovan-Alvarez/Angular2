import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint = 'http://localhost:3789/v2/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };
  mensaje = 'Ejecutar el guardar teacher';


  constructor(private http: HttpClient) {  }
    private extractData(res: Response){
      let body = res;
      return body || [ ] || { };
    }
    getTeachers(): Observable <any> {
      return this.http.get(this.endpoint + 'list').pipe(
        map(this.extractData));
    }

    setTeacher(teacher_guardar){
      console.log(this.mensaje);
      var params = JSON.stringify(teacher_guardar);
      return this.http.post(this.endpoint + 'guardar-profesor', params, this.httpOptions).pipe(
        map(res =>{}));
    }
 


}

