import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {AccessDeniedComponent} from "./pages/access-denied/access-denied.component";
import {TokenGuardServiceService} from "./service/guard/token-guard-service.service";
import {UserComponent} from "./pages/user/user.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {AdminGuardServiceService} from "./service/guard/admin-guard-service.service";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'access-denied', component: AccessDeniedComponent},
  {path: '', component: LoginComponent},

  {
    path: 'home', component: HomeComponent , canActivate: [TokenGuardServiceService],
    children: [
      {
        path: 'user', component: UserComponent,
      },
      {
        path: 'admin', component: AdminComponent, canActivate : [AdminGuardServiceService]
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
