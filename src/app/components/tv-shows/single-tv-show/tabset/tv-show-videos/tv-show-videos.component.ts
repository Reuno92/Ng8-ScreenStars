import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {AccessIdService} from '../../../../../_shared/services/access-id.service';
import {Observable} from 'rxjs';
import {Video, VideoResult} from '../../../../../_shared/models/TV';
import {TvShowHttpService} from '../../../../../_shared/services/http/tv-show-http.service';

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

  private firstInList: VideoResult;

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
    this.videos$.subscribe(
      data => this.firstInList = data.results[0],
      err => console.log(err),
      () => console.log(this.firstInList)
    );
  }


}
