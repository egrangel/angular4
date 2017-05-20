import { Component } from '@angular/core';
import { ShowTimeService } from './showtime.service';

@Component({
    selector: 'show-time',
    template: '<p>{{showTime}}</p>'
})
export class ShowTimeComponent {

    showTime: String;

    constructor (showTimeService: ShowTimeService) {
        showTimeService.geraHoraAtual(1000,showTime => this.showTime = showTime);
    }
}