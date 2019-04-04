import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
 titulo = 'Clase de productos'

  constructor() { }

  ngOnInit() {
    console.log('Productos lanzados');
  }

}
