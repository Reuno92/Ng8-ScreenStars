export class Similar {
  constructor(
    public page: number,
    public results: SimilarResult,
    public total_pages: number,
    public total_result: number
  ) {}
}

class SimilarResult {

  constructor(
    public original_name: string,
    public name: string,
    public original_language: string,
    public poster_path: string|null,
    public backdrop_path: string|null,
    public id: number,
    public popularity: number,
    public vote_average: number,
    public overview: string,
    public first_air_date: string,
    public origin_country: Array<string>,
    public genre_ids: Array<number>,
    public vote_count: number
  )
}
