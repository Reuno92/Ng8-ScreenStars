export class SeasonExternalId {

  constructor(
    public freebase_mid?: string,
    public freebase_id?: string,
    public tvdb_id: string,
    public tvrage_id: string,
    public id: string
  ) {
  }
}
