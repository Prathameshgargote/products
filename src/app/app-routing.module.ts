import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ProductComponent } from './shared/components/product/product.component';
import { CardDashComponent } from './shared/components/card-dash/card-dash.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'products',
    component:CardDashComponent,
  }, {
    path: 'products/:Id',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
