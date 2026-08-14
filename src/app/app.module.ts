import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EmployeeGridComponent } from './components/employee-grid/employee-grid.component';

@NgModule({
  declarations: [App, ProfileComponent, EmployeeGridComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
