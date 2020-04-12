import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-reorder',
    templateUrl: './list-reorder.page.html',
    styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

    personajes = ['Aquaman','Super Man','Batman','Flash','Mujer Maravilla'];

    constructor() { }

    ngOnInit() {
    }

    reorder(event){
        //console.log(event);

        // obtenemos el elemento eliminado
        const itemMover = this.personajes.splice(event.detail.from, 1)[0];

        // mover el itemmover a la posicion correcta
        this.personajes.splice( event.detail.to, 0, itemMover);

        // Terminar el evento
        event.detail.complete();

    }

    onClick() {
        console.info( this.personajes );
    }

}
