import { Routes } from '@angular/router';
import {AccueilComponent} from "./compos/accueil/accueil.component";
import {InfosComponent} from "./compos/infos/infos.component";
import {TestsComponent} from "./compos/tests/tests.component";
import {ContactComponent} from "./compos/contact/contact.component";

export const routes: Routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'accueil', component: AccueilComponent },
    { path: 'infos/:type', component: InfosComponent },
    { path: 'tests', component: TestsComponent },
    { path: 'contact', component: ContactComponent },
];
