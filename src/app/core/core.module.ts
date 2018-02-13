import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../common/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthInterceptor } from '../common/auth.interceptor';
import { LoggingInterceptor } from '../common/logging.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ]
})
export class CoreModule {}
