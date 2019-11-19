import {AfterContentChecked, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IMAGES_HOST_SECURE} from '../../../constant/api.constant';

@Component({
  selector: 'app-card-columns',
  templateUrl: './card-columns.component.html',
  styleUrls: ['./card-columns.component.scss']
})
export class CardColumnsComponent implements OnInit, AfterContentChecked {

  @Input() private data$: Observable<any>;
  @Input() private title: string;

  public imageLinks: string;

  public constructor() {
    this.imageLinks = IMAGES_HOST_SECURE;
  }

  public ngOnInit() {}

  public ngAfterContentChecked(): void {}
}
