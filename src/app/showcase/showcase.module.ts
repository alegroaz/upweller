import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { ShowcaseRoutingModule} from './showcase-routing.module';
// import { AuthModule} from '../auth/auth.module';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';

import { ShowcaseNavbarComponent} from './showcase-navbar/showcase-navbar.component';
import { ShowcaseFooterComponent} from './showcase-footer/showcase-footer.component';

import { ShowcaseComponent} from './showcase/showcase.component';
import { HomeComponent} from './pages/home/home.component';
import { CustomersComponent} from './pages/customers/customers.component';


@NgModule({
  declarations: [
    ShowcaseComponent,
    HomeComponent,
    CustomersComponent,
    ShowcaseNavbarComponent,
    ShowcaseFooterComponent,
  ],
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    // AuthModule
  ],
  exports: [
  ]
})
export class ShowcaseModule { }
