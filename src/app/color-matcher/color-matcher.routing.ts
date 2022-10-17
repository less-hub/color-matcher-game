import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorMatcherComponent } from './color-matcher.component';

const routes: Routes = [
  {
    path: '',
    component: ColorMatcherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColorMatcherRoutingModule {}
