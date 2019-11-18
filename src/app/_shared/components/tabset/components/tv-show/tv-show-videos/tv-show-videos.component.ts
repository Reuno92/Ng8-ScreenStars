import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {AccessIdService} from '../../../../../services/access-id.service';
import {Observable} from 'rxjs';
import {Video} from '../../../../../models/TV';
import {TvShowHttpService} from '../../../../../services/http/tv-show-http.service';

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

  constructor(private tvShowHttpService: TvShowHttpService, private accessId: AccessIdService) {
  }

  public ngOnInit() {
    this.getVideos();
  }

  private getVideos() {
    this.accessId.getId();
    this.id = this.accessId.id;
    this.error = this.accessId.error;

    this.videos$ = this.tvShowHttpService.getVideosTVShow(this.id);
  }



}
