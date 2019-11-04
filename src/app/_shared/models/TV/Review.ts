export class Review {

  constructor(
    public id: number,
    public page: number,
    public result: ResultReview,
    public total_pages: number,
    public total_results: number
  ) {}
}

class ResultReview {

  constructor(public author: string,
              public content: string,
              public id: number,
              public url: string) {}
}
