import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public contactoEmail: string;

  constructor() { }

  ngOnInit() {
  }
  guardaremail(){
    localStorage.setItem('correo', this.contactoEmail);

    console.log(localStorage.getItem);
  }
  eliminarEmail(){
    localStorage.removeItem('correo');
    alert('Eliminado');
  }

}
