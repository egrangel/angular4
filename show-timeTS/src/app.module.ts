import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShowTimeService } from './showtime.service';
import { AppComponent } from './app.component';
import { ShowTimeComponent } from './showtime.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,ShowTimeComponent],
    providers: [ShowTimeService],
    bootstrap: [AppComponent]
})
export class AppModule { }