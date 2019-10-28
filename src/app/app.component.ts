import {Component, OnInit} from '@angular/core';
import {Route} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title: string = 'ScreenStars |';

  public constructor() {
  }

  public ngOnInit(): void {

  }
}
