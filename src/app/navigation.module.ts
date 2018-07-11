import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component'
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminAuthGuardService } from './services/admin-auth-guard/admin-auth-guard.service';
import { AdminNewProductComponent } from './admin/admin-new-product/admin-new-product.component';
import { AdminNewProductCategoryComponent} from './admin/admin-new-product-category/admin-new-product-category.component';
import { ProductsComponent } from './products/products.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent },
    {path: 'image', component: ImageComponent },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {
        path: 'admin', 
        component: AdminHomeComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
    },
    {
        path: 'admin/product/new', 
        component: AdminNewProductComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
    },
    {
        path: 'admin/product/new/category', 
        component: AdminNewProductCategoryComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
    },
    {path: 'no-access', component: NoAccessComponent}
];

@NgModule({

  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class NavigationModule {}