export class Images {

  constructor(
    public id?: number,
    public backdrops?: ImagesResult,
    public posters?: ImagesResult
  ) {
  }
}

export class ImagesResult {

  constructor(
    public aspect_ratio?: number,
    public file_path?: string,
    public height?: number,
    public iso_639_1?: string | null,
    public vote_average?: string,
    public vote_count?: number,
    public width?: number
  ) {
  }
}
