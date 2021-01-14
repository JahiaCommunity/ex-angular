import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-homepage-tpl',
  templateUrl: './homepage-tpl.component.html',
  styleUrls: ['./homepage-tpl.component.css']
})
export class HomepageTplComponent implements OnInit, OnDestroy {

  navigationSubscription: Subscription;
  pageId = 'bcf19d91-0ee5-4ab0-8df8-90d477aad477';
  content: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd && this.route.snapshot.params['uuid'] != null) {
        this.pageId = this.route.snapshot.params['uuid'];
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{

  }

}
