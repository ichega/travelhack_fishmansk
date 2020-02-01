import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AuthComponent } from './auth/auth.component';
import { RegistComponent } from './regist/regist.component';


const routes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: 'regist', component: RegistComponent},
  { path: '**', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
