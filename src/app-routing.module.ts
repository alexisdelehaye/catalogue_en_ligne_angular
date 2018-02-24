import {RouterModule, Routes} from '@angular/router';
import { AppComponent} from './app/app.component';
import {ProduitDetailsComponent} from './views/produit/produit.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  {
    path: 'Produit/:id',
    component: AppComponent
  },
];

export const routing = RouterModule.forRoot(routes, {
  enableTracing: true
});
