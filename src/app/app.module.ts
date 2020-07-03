import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CareersComponent } from './careers/careers.component';
import { ProjectsComponent } from './projects/projects.component';
import { SubsidariesComponent } from './subsidaries/subsidaries.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomeComponent } from './home/home.component';
import { VideoBannerComponent } from './video-banner/video-banner.component';
import { HeaderRouteNavComponent } from './header-route-nav/header-route-nav.component';
import { ChairmanComponent } from './chairman/chairman.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { CareersListComponent } from './careers-list/careers-list.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactusComponent,
    CareersComponent,
    ProjectsComponent,
    SubsidariesComponent,
    AboutusComponent,
    routingComponents,
    HeaderNavComponent,
    HomeComponent,
    VideoBannerComponent,
    HeaderRouteNavComponent,
    ChairmanComponent,
    CareersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
