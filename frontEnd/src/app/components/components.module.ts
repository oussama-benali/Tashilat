import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt'; 
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './adminPages/admin/admin.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { RechargeComponent } from './pages/recharge/recharge.component';
import { FacturePageComponent } from './pages/facture-page/facture-page.component';
import { TransfertArgentsPageComponent } from './pages/transfert-argents-page/transfert-argents-page.component';
import { MyChartComponent } from './my-chart/my-chart.component';
export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    
    FormsModule,
    JwtModule.forRoot({config: {
      tokenGetter: tokenGetter}}),
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    AdminComponent,
    UserPageComponent,
    RechargeComponent,
    FacturePageComponent,
    TransfertArgentsPageComponent,
    //MyChartComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
