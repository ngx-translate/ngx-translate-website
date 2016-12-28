import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from '../components/app.component';
import '../../style.scss';

export {AppComponent};

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: []
})
export class MainModule {
    constructor() {}
}
