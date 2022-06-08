import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'./heroe.component.html'
})
export class HeroeComponent {
    nombre  : string    = 'Iroman';
    edad    : number    = 43;

    get nombreCapitalizado():string {
        return this.nombre.toLocaleUpperCase();
    }

    obtermerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 25;
    }
}