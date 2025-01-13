import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MarkbookComponent} from "./compos/markbook/markbook.component";
import {AccueilComponent} from "./compos/accueil/accueil.component";

export const routes: Routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'accueil', component: AccueilComponent },
];
