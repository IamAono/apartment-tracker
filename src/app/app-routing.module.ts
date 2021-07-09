import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';

const routes: Routes = [
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'detail/:id', component: ApartmentDetailComponent },
  { path: '', redirectTo: '/apartments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
