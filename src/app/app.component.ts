import { Component } from '@angular/core';
import {GraphqlService} from "../services/graphql.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  homePageId: string = '';

  title = 'ex-angular';

  constructor(private graphqlService: GraphqlService) {
    graphqlService.getHomePage('/home').subscribe(
      (response) => {
        this.homePageId = response.data.jcr.nodeByPath.uuid;
        console.log("DEBUG AppComponent " + this.homePageId);
      }, (error) => {
        console.log('Error ' + error);
      }
    );
  }

}
