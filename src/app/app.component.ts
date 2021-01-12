import { Component } from '@angular/core';
import {GraphqlService} from "../services/graphql.service";
import {environment} from "../environments/environment";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  homePageId: string = '';
  bannerImg: string = '';

  title = 'ex-angular';

  constructor(private graphqlService: GraphqlService) {
    graphqlService.getPage('/home').subscribe(
      (response) => {
        this.homePageId = response.data.jcr.nodeByPath.uuid;
      }, (error) => {
        console.log('Error ' + error);
      }
    );
    graphqlService.getBanner().subscribe(
      response =>{
        this.bannerImg = environment.jahiaHost + '/files/live' + response.data.jcr.nodeByPath.image.refNode.path;
      }, error => {
        console.log('Error ' + error);
      }
    )

  }

}
