import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {GraphqlService} from "../services/graphql.service";
import { HomepageTplComponent } from './pages-tpl/homepage-tpl/homepage-tpl.component';
import { LeftSideBarTplComponent } from './pages-tpl/left-side-bar-tpl/left-side-bar-tpl.component';
import { NoSidebarTplComponent } from './pages-tpl/no-sidebar-tpl/no-sidebar-tpl.component';
import { RightSideBarTplComponent } from './pages-tpl/right-side-bar-tpl/right-side-bar-tpl.component';
import { UnknownTplComponent } from './pages-tpl/unknown-tpl/unknown-tpl.component';
import {RouterModule, Routes} from "@angular/router";
import { ContentListComponent } from './content/content-list/content-list.component';


const navRoutes: Routes = [
  { path: 'home/:uuid', component: HomepageTplComponent, runGuardsAndResolvers: 'always' },
  { path: 'left-side-bar/:uuid', component: LeftSideBarTplComponent, runGuardsAndResolvers: 'always' },
  { path: 'right-side-bar/:uuid', component: RightSideBarTplComponent, runGuardsAndResolvers: 'always' },
  { path: 'no-sidebar/:uuid', component: NoSidebarTplComponent, runGuardsAndResolvers: 'always' },
  { path: '', component: HomepageTplComponent, runGuardsAndResolvers: 'always' },
  {path: "**", component: UnknownTplComponent, runGuardsAndResolvers: 'always'}
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomepageTplComponent,
    LeftSideBarTplComponent,
    NoSidebarTplComponent,
    RightSideBarTplComponent,
    UnknownTplComponent,
    ContentListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(navRoutes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [
    GraphqlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
