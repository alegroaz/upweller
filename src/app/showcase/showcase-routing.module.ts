import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowcaseComponent} from './showcase/showcase.component';
import { HomeComponent} from './pages/home/home.component';
import { CustomersComponent} from './pages/customers/customers.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'customers', component: CustomersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule { }
