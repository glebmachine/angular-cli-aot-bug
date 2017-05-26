import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from "app/demo/demo.component";
import { DemoResolve } from "app/demo/demo.resolve";

const routes: Routes = [
  {
    path: '',
    resolve: {
      DemoResolve
    },
    component: DemoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
