import { Component, OnInit } from '@angular/core';
import {GraphqlService} from "../../services/graphql.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  pages: any[] = [];

  home =  {
    name: 'NAV',
    path: '/',
    uuid: ''
  };

  constructor(private navigationService: GraphqlService) {
    navigationService.getPagesFromRESTApi('/home');
  }

  ngOnInit(): void {
    this.pages = this.navigationService.pages;
    this.home = this.navigationService.home;
  }




}
