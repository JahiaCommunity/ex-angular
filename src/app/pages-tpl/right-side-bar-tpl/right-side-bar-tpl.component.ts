import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-right-side-bar-tpl',
  templateUrl: './right-side-bar-tpl.component.html',
  styleUrls: ['./right-side-bar-tpl.component.css']
})
export class RightSideBarTplComponent implements OnInit, OnDestroy {

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
