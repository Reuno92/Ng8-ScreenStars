import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Tabset} from '../../models/tabset';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {
  @Input() public justify: string = 'justified';
  @Input() public tabs: Array<Tabset | null>;
  @Input() public id: string;

  public activeTabUrl: any;
  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.router.events.subscribe( event => {
      if (event instanceof NavigationEnd) {
        this.activeTabUrl = event.urlAfterRedirects;
      }
    });
  }

  public onTabChange(event): void {
    const route = {};
    this.tabs.map( data => route[data.name] = data.urlPrefix + this.id + data.urlSuffix);
    this.router.navigateByUrl(route[event.nextId]);
  }

}
