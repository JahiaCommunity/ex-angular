import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-unknown-tpl',
  templateUrl: './unknown-tpl.component.html',
  styleUrls: ['./unknown-tpl.component.css']
})
export class UnknownTplComponent implements OnInit, OnDestroy {

  navigationSubscription: Subscription;
  templateName = '';
  pageId = '';
  content: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.pageId = this.route.snapshot.url[1].path;
        this.templateName = this.route.snapshot.url[0].path;
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{

  }

}
