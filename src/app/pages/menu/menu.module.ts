import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MenuListResolver } from './menu-resolver.service';
import { Menu } from './menu.model';

const routes: Routes = [{
  path: '',
  component: MenuListComponent,
  resolve: {
    menu: MenuListResolver
  }
},
{
  path: 'list',
  component: MenuListComponent,
  resolve: {
    menu: MenuListResolver
  }
},
{
  path: 'add',
  component: MenuAddComponent
} 
];  
 
@NgModule({
  declarations: [MenuListComponent, MenuAddComponent],
  imports: [
    CommonModule,
    SharedModule, 
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [ 
    MenuListResolver,
    Menu
  ]
})
export class MenuModule { }
