import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NewPageComponent} from "../new-page/new-page.component";
import {NgModule} from "@angular/core";
import {ProductListComponent} from "./product-list.component";

export const ROUTES: Routes = [
    {
        path: '',
        component: ProductListComponent,
        children:[
            {
                path:"test",
                component:NewPageComponent
            }
        ]
    },
/*    {
        path:"test",
        component:NewPageComponent
    }*/
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations:[
        ProductListComponent,
        NewPageComponent
    ]
})

export class ProductListModule {

    constructor() {
    }
}
