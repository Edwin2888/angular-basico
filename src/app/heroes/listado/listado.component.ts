import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Hulk','Iroman','Thor'];
  ultHeroeBorrado: string = '';

  // borrarHeroe(posicion: number): void{
  //   this.heroes.splice(posicion,1);
  // }
  borrarHeroe(){
    this.ultHeroeBorrado = this.heroes.shift() || '';
  }
}
