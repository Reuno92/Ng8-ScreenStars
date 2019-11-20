import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {AccessIdService} from '../../../../../_shared/services/access-id.service';
import {Observable} from 'rxjs';
import {Video, VideoResult} from '../../../../../_shared/models/TV';
import {TvShowHttpService} from '../../../../../_shared/services/http/tv-show-http.service';
import * as Lang from '../../../../../json/language-codes.json';

@Component({
  selector: 'app-tv-show-videos',
  templateUrl: './tv-show-videos.component.html',
  styleUrls: ['./tv-show-videos.component.scss'],
  providers: [AccessIdService]
})
export class TvShowVideosComponent implements OnInit {

  private id: string;
  private error: HttpErrorResponse;
  private loadingComponent: boolean;

  private videos$: Observable<Video>;
  private onAir: VideoResult;

  private language: any;

  constructor(private tvShowHttpService: TvShowHttpService, private accessId: AccessIdService) {
    this.language = (Lang as any).default;
  }

  public ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.getVideos();
  }

  private getVideos() {
    this.loadingComponent = true;
    this.accessId.getId();
    this.id = this.accessId.id;
    this.error = this.accessId.error;

    this.videos$ = this.tvShowHttpService.getVideosTVShow(this.id);
    this.videos$.subscribe(
      data => this.onAir = data.results[0],
      err => console.log(err),
      () => this.loadingComponent = false
    );
  }

  private change(userChoice) {
    this.onAir = userChoice;
  }

  private getTag(type): string {
    if (type === 'Trailer' || type === 'Featurette') {
      return 'badge badge-primary';
    }

    if (type === 'Clip' || type === 'Teaser') {
      return 'badge badge-danger';
    }

    if (type === 'Opening Credits' || type === 'Behind the scene' || type === 'Bloopers') {
      return 'badge badge-info';
    }
  }

  private quality(suggestion): string {
    return (typeof suggestion === 'number') ? 'hd' + suggestion : 'default';
  }

}
