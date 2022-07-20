import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "./table/table.component";
import {ChartComponent} from "./chart/chart.component";
import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";
import {pushTokenService} from "./services/pushToken.service";
import {AuthGuards} from "./auth.guard";
import {NotFoundComponentComponent} from "./not-found-component/not-found-component.component";


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'ChartComponent',
    component: ChartComponent,
    canActivate: [AuthGuards],
    data: { accessToken: "2720-4044-4713-0021"}
  },{
    path: 'TableComponent',
    component: TableComponent,
    canActivate: [ AuthGuards],
    data: { accessToken: "5525-5681-6140-8266"}
  },
  {path: '**', component: NotFoundComponentComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// AngularFireAuthGuard,
