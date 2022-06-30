import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardListComponent } from 'src/app/components/card-list/card-list.component';

const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  declarations: [ProductsComponent, CardListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class ProductsModule {}
