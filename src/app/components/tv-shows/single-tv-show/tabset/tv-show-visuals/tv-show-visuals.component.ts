import { Component, OnInit } from '@angular/core';
import {Images} from '../../../../../_shared/models/TV';
import {HttpErrorResponse} from '@angular/common/http';
import {AccessIdService} from '../../../../../_shared/services/access-id.service';
import {TvShowHttpService} from '../../../../../_shared/services/http/tv-show-http.service';
import {Observable} from 'rxjs';
import {IMAGES_HOST, IMAGES_HOST_SECURE} from '../../../../../constant/api.constant';

@Component({
  selector: 'app-tv-show-visuals',
  templateUrl: './tv-show-visuals.component.html',
  styleUrls: ['./tv-show-visuals.component.scss'],
  providers: [AccessIdService]
})
export class TvShowVisualsComponent implements OnInit {

  public id: string;
  public error: HttpErrorResponse;
  public loadingComponent: boolean;

  public imagesLinksSecure: string;
  public imagesLinks: string;
  public images$: Observable<Images>;

  public readonly backdropSizes: Array<string>;
  public readonly posterSizes: Array<string>;

  constructor(private tvShowHttpService: TvShowHttpService,
              private accessIdService: AccessIdService) {
    this.imagesLinksSecure = IMAGES_HOST_SECURE;
    this.imagesLinks = IMAGES_HOST;

    // TODO create a resolver pointing to the endpoint configuration
    this.backdropSizes = ['w300', 'w780', 'w1280', 'original'];
    this.posterSizes = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'];
  }

  public ngOnInit(): void {
    this.getImages();
  }

  private getImages(): void {
    this.loadingComponent = true;
    this.accessIdService.getId();
    this.id = this.accessIdService.id;
    this.error = this.accessIdService.error;

    this.images$ = this.tvShowHttpService.getImagesTvShow(this.id);
    this.loadingComponent = false;
  }

}
