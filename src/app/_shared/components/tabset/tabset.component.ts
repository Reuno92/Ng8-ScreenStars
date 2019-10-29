import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {
  @Input() public justify: string = 'justified';
  @Input() public titles: Array<string>;
  @Input() public content: any;

  constructor() {}

  ngOnInit() {}

}
