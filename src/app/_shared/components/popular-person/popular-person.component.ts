import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-popular-person',
  templateUrl: './popular-person.component.html',
  styleUrls: ['./popular-person.component.scss']
})
export class PopularPersonComponent implements OnInit {

  @Input() private datas$: Observable<any>;
  @Input() private title: string;

  constructor() { }

  ngOnInit() {
  }

}
