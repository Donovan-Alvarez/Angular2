import { Component, OnInit } from '@angular/core';
import { TeacherModel } from 'src/app/models/teacher';
import { RestService } from '../../service/rest.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  datos;
  teacher;

  constructor( public rest: RestService) {
    this.rest.setTeacher(this.teacher); 
    this.teacher = new TeacherModel('','','','');
   }

  ngOnInit() {
    this.getData();
  }
  
  onSubmit(){
    console.log(this.teacher);
  }

  getData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  }

}
