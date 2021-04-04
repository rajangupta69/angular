import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavigationComponent, CategoryComponent, ItemComponent],
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  exports: [
    NavigationComponent,
    RouterModule,
    ReactiveFormsModule,
    CategoryComponent,
    ItemComponent
  ]
})
export class SharedModule { }
          