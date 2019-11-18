export class Recommendation {

  constructor(
    public page: number,
    public results: Array<RecommendationResult>,
    public total_pages: number,
    public total_results: number
  ) {}
}

class RecommendationResult {
  constructor(
    public poster_path: string | null,
    public popularity: number,
    public id: number,
    public backdrop_path: string,
    public vote_average: number,
    public overview: string,
    public first_air_date: string,
    public origin_country: Array<string>,
    public genre_ids: Array<string>,
    public original_language: string,
    public vote_count: number,
    public name: string,
    public original_name: string
  ) {}
}
