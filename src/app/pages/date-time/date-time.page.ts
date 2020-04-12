import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-date-time',
    templateUrl: './date-time.page.html',
    styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

    fechaNaci: Date = new Date();
    customPickerOptions;
    customDate;

    constructor() { 

        this.customPickerOptions = {
            buttons: [{
              text: 'Save',
              handler: (date) => {
                  console.log('Clicked Save!')
                  console.log(date);
                  console.log(date.year.value);
                  console.log(date.month.value);
                  console.log(date.day.value);
                  
                }
            }, {
              text: 'Log',
              handler: () => {
                console.log('Clicked Log. Do not Dismiss.');
                return false;
              }
            }]
          }
    }

    ngOnInit() {
    }

    cambioFecha(event){
        console.log('ionChange: ', event );
        console.log('---------');
        console.log('Date:', new Date( event.detail.value ));
        
        
        
    }

}
