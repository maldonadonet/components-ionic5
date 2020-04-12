import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista',{static: false}) lista:IonList;

  usuarios: Observable<any>;

  constructor( private _us: DataService ) { }

  ngOnInit() {
   this.usuarios = this._us.getUsers();
  }

  favorite(item:any){
    console.log('Favorite:',item);
    this.lista.closeSlidingItems();
  }
  share(item:any){
    console.log('share:',item);
    this.lista.closeSlidingItems();
  }
  borrar(item:any){
    console.log('delete:',item);
    this.lista.closeSlidingItems();
  }

}
