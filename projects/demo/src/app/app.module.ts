import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwlDateTimeModule, OwlMomentDateTimeModule } from '@busacca/ng-pick-datetime';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        //
        OwlDateTimeModule,
        OwlMomentDateTimeModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
