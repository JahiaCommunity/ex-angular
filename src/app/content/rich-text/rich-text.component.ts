import {Component, Input, OnInit} from '@angular/core';
import {GraphqlService} from "../../../services/graphql.service";

import { environment} from "../../../environments/environment";

@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.css']
})

export class RichTextComponent implements OnInit {

  bigText: any;

  @Input('contentId') contentId!: string;

  constructor(private graphqlService: GraphqlService) { }

  ngOnInit(): void {
    this.graphqlService.getBigText(this.contentId)
      .subscribe(response => {
        this.bigText = response.data.jcr.nodeById;
      }, error => {
        console.log("Error " + error);
      }
    );
  }

  getText(){
    let toReturn: string = this.bigText.text.value;

    console.log("DEBUG " + toReturn);

    toReturn = toReturn.replace(/\/files\/\{workspace\}/gm, environment.jahiaHost + "/files/live")

    return toReturn;
  }

}
