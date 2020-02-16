import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewPageComponent } from './new-page/new-page.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
 /*     {
        path: '',
        component: ProductListComponent,
/!*        children:[
          {path:'test',component: NewPageComponent}
        ]*!/
      },*/
/*    {
        path:'test',component: NewPageComponent
      }*/
      {
        path: '',
        loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)
      }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
