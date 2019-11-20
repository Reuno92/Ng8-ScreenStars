import {AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Tabset} from '../../models/tabset';
import {NgbTabset} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss'],
})
export class TabsetComponent implements OnInit, AfterViewChecked {
  @Input() public justification = 'justified';
  @Input() public tabsOptions: Array<Tabset | null>;
  @Input() public id: string;

  @ViewChild('appTabSet', {read: false, static: false}) public tabSet: NgbTabset;

  constructor(private router: Router) {}

  public ngOnInit(): void {
  }

  public ngAfterViewChecked(): void {
    const url = this.router.url;
    const arrRouter: Array<string> = url.split('/');
    const lastUrn: number = arrRouter.length - 1;
    const activeTab: string = arrRouter[lastUrn].charAt(0).toUpperCase() + arrRouter[lastUrn].slice(1);
    this.tabSet.select(activeTab);
  }

  public onTabChange(event): void {
    const route = {};
    this.tabsOptions.map(data => route[data.name] = data.urlPrefix + this.id + data.urlSuffix);
    this.router.navigateByUrl(route[event.nextId]);
  }

}
