import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from '../components/app.component';
import '../../styles/app.scss';

const COMPONENTS = [
    AppComponent
];

export {AppComponent};

@NgModule({
    imports: [BrowserModule],
    bootstrap: [...COMPONENTS],
    declarations: [...COMPONENTS],
    providers: []
})
export class MainModule {
    constructor() {}
}
