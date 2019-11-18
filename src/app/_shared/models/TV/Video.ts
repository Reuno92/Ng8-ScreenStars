export class Video {

  constructor(
    public id?: string,
    public results?: Array<VideoResult>
  ) {}
}

export class VideoResult {
  constructor(
    public id?: string,
    public iso_3166_1?: string,
    public iso_639_1?: string,
    public key?: string,
    public name?: string,
    public site?: string,
    public size?: number,
    public type?: string,
  ) {}
}
