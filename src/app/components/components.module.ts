import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        NgOptimizedImage,
    ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    FormComponent,
    LoginComponent
  ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        FormComponent
    ]
})
export class ComponentsModule { }
