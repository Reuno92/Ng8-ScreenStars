import {Component, Input, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {IMAGES_HOST_SECURE} from '../../../constant/api.constant';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  @Input() private datas$: Observable<any>;
  public imagesLink: string;

  constructor(private config: NgbCarouselConfig) {
    this.config.interval = 10000;
    this.config.wrap = true;
    this.config.keyboard = false;
    this.config.pauseOnHover = true;

    this.imagesLink = IMAGES_HOST_SECURE;
  }

  ngOnInit() {}

}
