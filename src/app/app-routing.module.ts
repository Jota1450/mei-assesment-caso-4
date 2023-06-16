import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './components/result/result.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: 'form-component', component: FormComponent },
  { path: 'result-component/:result', component: ResultComponent },
  { path: '',   redirectTo: '/form-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
