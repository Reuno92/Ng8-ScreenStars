export class Rating {

  constructor(
    public id: number,
    public results: Array<ResultRating>
  ) {}
}

export class ResultRating {

  constructor(
    public iso_3166_1: string,
    public rating: string
  ) {}
}
