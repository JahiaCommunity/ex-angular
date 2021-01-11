import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {NavigationService} from "../services/navigation.service";
import { HomepageTplComponent } from './pages-tpl/homepage-tpl/homepage-tpl.component';
import { LeftSideBarTplComponent } from './pages-tpl/left-side-bar-tpl/left-side-bar-tpl.component';
import { NoSidebarTplComponent } from './pages-tpl/no-sidebar-tpl/no-sidebar-tpl.component';
import { RightSideBarTplComponent } from './pages-tpl/right-side-bar-tpl/right-side-bar-tpl.component';
import { UnknownTplComponent } from './pages-tpl/unknown-tpl/unknown-tpl.component';
import {RouterModule, Routes} from "@angular/router";


const navRoutes: Routes = [
  { path: 'home', component: HomepageTplComponent },
  { path: 'left-side-bar', component: LeftSideBarTplComponent },
  { path: 'right-side-bar', component: RightSideBarTplComponent },
  { path: 'no-sidebar', component: NoSidebarTplComponent },
  { path: '', component: HomepageTplComponent },
  {path: "**", component: UnknownTplComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomepageTplComponent,
    LeftSideBarTplComponent,
    NoSidebarTplComponent,
    RightSideBarTplComponent,
    UnknownTplComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(navRoutes)
  ],
  providers: [
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
