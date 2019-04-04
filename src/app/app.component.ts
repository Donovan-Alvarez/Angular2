import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Donovan';
  correo: string;


  ngOnInit(){
    this.correo = localStorage.getItem('correo');
  }
  ngDoCheck(){
    this.correo = localStorage.getItem('correo');
  }
}


