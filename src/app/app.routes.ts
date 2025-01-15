import { Routes } from '@angular/router';
import {AccueilComponent} from "./compos/accueil/accueil.component";
import {InfosComponent} from "./compos/infos/infos.component";

export const routes: Routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'accueil', component: AccueilComponent, pathMatch: 'full' },
    { path: 'infos', component: InfosComponent, pathMatch: 'full' },
];
