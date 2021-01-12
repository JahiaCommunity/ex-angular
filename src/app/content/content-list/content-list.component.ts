import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  @Input('parentId') parentId!: string;
  @Input('contenListName') contenListName!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
