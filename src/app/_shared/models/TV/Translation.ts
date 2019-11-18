export class Translation {

  constructor(
    public id: number,
    public translations: Array<ResultTranslation>
  ) {
  }
}

export class ResultTranslation {

  constructor(
    public iso_3166_1?: string,
    public iso_639_1?: string,
    public name?: string,
    public english_name?: string,
    public data?: DataTranslate
  ) {}

}


export class DataTranslate {

  constructor(
    public name?: string,
    public overview?: string,
    public homepage?: string
  ) {}
}
