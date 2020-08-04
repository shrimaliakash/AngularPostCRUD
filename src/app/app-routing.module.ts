import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'login'},
  	{ path: 'post', component: PostComponent },
  	{ path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
