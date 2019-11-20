import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Tabset} from '../../models/tabset';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {
  @Input() public justification = 'justified';
  @Input() public tabsOptions: Array<Tabset | null>;
  @Input() public id: string;

  private tabs: NgbTabset;

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
    const actualUrl = this.router.url;
    this.tabsOptions.map(data => route[data.name] = data.urlPrefix + this.id + data.urlSuffix);
    this.router.navigateByUrl(route[event.nextId]);
  }

}
