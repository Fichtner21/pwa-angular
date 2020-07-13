import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailViewComponent } from './detail-view/detail-view.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'detail',
  component: DetailViewComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
