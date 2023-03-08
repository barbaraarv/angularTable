import { AuthRoutingModule } from './auth/auth-routing.module';
import { PrivateRoutingModule } from './private/private-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: PrivateRoutingModule },
  { path: 'login', component: AuthRoutingModule },
  { path: '', component: AuthRoutingModule }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule,
    PrivateRoutingModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
