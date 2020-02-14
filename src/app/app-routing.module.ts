import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from "./_helpers/auth.guard";
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'admin-layout', loadChildren: () => import(`./admin-layout/admin-layout.module`).then(m => m.AdminLayoutModule),canActivate:[AuthGuard]},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
