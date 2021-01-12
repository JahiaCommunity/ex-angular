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

  constructor(private graphqlService: GraphqlService) {
    graphqlService.getPagesFromRESTApi('/home').subscribe(
        (response) => {
          const pagesInResponse = response.data.jcr.nodeByPath.children.nodes;
          for (let i = 0; i < pagesInResponse.length; i++) {
            const page = pagesInResponse[i];
            this.pages.push(page);
          }
          this.home.name = response.data.jcr.nodeByPath.displayName;
          this.home.path = response.data.jcr.nodeByPath.path;
          this.home.uuid = response.data.jcr.nodeByPath.uuid;
        }, (error) => {
          console.log('Error ' + error);
        }
      );
  }

  ngOnInit(): void {
  }




}
