import {Component, Input, OnInit} from '@angular/core';
import { VideoResult } from '../../models/TV';

enum Source {
  youtube = "https://www.youtube.com/embed/",
  vimeo = "https://player.vimeo.com/video/"
}

@Component({
  selector: 'app-embed-video',
  templateUrl: './embed-video.component.html',
  styleUrls: ['./embed-video.component.scss']
})
export class EmbedVideoComponent implements OnInit {

  @Input() video: VideoResult;
  @Input() autoplay: boolean;

  private source = Source;
  constructor() {}
  ngOnInit(): void {}
}
