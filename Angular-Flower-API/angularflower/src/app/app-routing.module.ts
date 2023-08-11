import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowdetlComponent } from './flowdetl/flowdetl.component';
import { FlowercardComponent } from './flowercard/flowercard.component';
import { GetapidatacompComponent } from './getapidatacomp/getapidatacomp.component';
import { MydropdowncompComponent } from './mydropdowncomp/mydropdowncomp.component';
import { MyreactiveformComponent } from './myreactiveform/myreactiveform.component';
import { StarttempComponent } from './starttemp/starttemp.component';
import { WcpComponent } from './wcp/wcp.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StarttempComponent
  },
  {
    path: 'flowercard',
    component: FlowercardComponent
  },
  {
    path: 'fldet/:pid',
    component: FlowdetlComponent
  },
  {
    path: 'mrfcom',
    component: MyreactiveformComponent
  },
  {
    path: 'mydropdown',
    component: MydropdowncompComponent
  },
  {
    path: 'getapidt',
    component: GetapidatacompComponent
  },
  {
    path: '**',
    component: WcpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
