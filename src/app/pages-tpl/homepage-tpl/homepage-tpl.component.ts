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
  pageId = '';
  content: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.pageId = this.route.snapshot.params['uuid'];
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{

  }

}
