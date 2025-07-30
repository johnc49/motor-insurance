import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteFormComponent } from './quote-form.component';

const routes: Routes = [
  {
    path: '',
    component: QuoteFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuoteFormRoutingModule {}
