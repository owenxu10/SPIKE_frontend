import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexpageComponent } from './indexpage/indexpage.component';

const appRoutes: Routes = [
    { path: '',
    redirectTo: '/guidance',
    pathMatch: 'full'
  },
  { path: 'guidance', component: IndexpageComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}