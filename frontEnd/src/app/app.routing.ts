import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthorizationGuard } from './authorization.guard';
import { admin } from 'googleapis/build/src/apis/admin';
import { AdminComponent } from './components/adminPages/admin/admin.component';
import { UserPageComponent } from './components/pages/user-page/user-page.component';
import { RechargeComponent } from './components/pages/recharge/recharge.component';
import { FacturePageComponent } from './components/pages/facture-page/facture-page.component';
import { TransfertArgentsPageComponent } from './components/pages/transfert-argents-page/transfert-argents-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes =[
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin', component: DashboardComponent,
    canActivate: [AuthorizationGuard],
    data: {
      allowedRoles: ["ROLE_ADMIN"]
     // role: 'ROLE_ADMIN'
    }
  },
  { path: 'user', component: UserPageComponent,
    canActivate: [AuthorizationGuard],
    data: {
      allowedRoles: ["ROLE_USER","ROLE_ADMIN"]
     // role: 'ROLE_USER'
    }
  },
  { path: 'user/recharge', component: RechargeComponent,
  canActivate: [AuthorizationGuard],
  data: {
    allowedRoles: ["ROLE_USER","ROLE_ADMIN"]
   // role: 'ROLE_USER'
  }
},
{ path: 'user/facture', component: FacturePageComponent,
canActivate: [AuthorizationGuard],
data: {
  allowedRoles: ["ROLE_USER","ROLE_ADMIN"]
 // role: 'ROLE_USER'
}
},
{ path: 'user/transfert', component: TransfertArgentsPageComponent,
canActivate: [AuthorizationGuard],
data: {
  allowedRoles: ["ROLE_USER","ROLE_ADMIN"]
 // role: 'ROLE_USER'
}
},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  /*{
path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: 'dashboard',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }*/
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes
     // ,{useHash: true}
     )
  ],
  providers: [ AuthorizationGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
