import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IMAGES_HOST} from '../../../constant/api.constant';

@Component({
  selector: 'app-card-columns',
  templateUrl: './card-columns.component.html',
  styleUrls: ['./card-columns.component.scss']
})
export class CardColumnsComponent implements OnInit {

  @Input() private data$: Observable<any>;

  public imageLinks: string;

  constructor() {
    this.imageLinks = IMAGES_HOST;
  }

  ngOnInit() {
  }

}
