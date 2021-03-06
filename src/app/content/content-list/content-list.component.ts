import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GraphqlService} from "../../../services/graphql.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit, OnChanges {

  contents: any[] = [];

  @Input('parentId') parentId!: string;
  @Input('contenListName') contenListName!: string;

  constructor(private graphqlService: GraphqlService) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.parentId != '') {
      this.graphqlService.getContentInList(this.parentId, this.contenListName).subscribe(response => {
          this.contents = response.data.jcr.nodeById.children.nodes[0].children.nodes;
        }, error => {
          console.log("Error : " + error);
        }
      );
    }
  }



}
