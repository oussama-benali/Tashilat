import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import {MatDialogModule} from '@angular/material/dialog';
import { JwtModule } from '@auth0/angular-jwt'; 
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './components/pages/login/login.component';
import { ChartsModule } from 'ng2-charts';
import { from } from 'rxjs';
import { UpdateDialogComponent } from './dialogs/update-dialog/update-dialog.component';
import { MyChartComponent } from './components/my-chart/my-chart.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    MatCardModule, 
    ChartsModule,
    MatDialogModule,
    
    
    
    RouterModule,
    AppRoutingModule,
    JwtModule.forRoot({config: {
      tokenGetter: tokenGetter}}),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UpdateDialogComponent,
   // MyChartComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
