import {Crew, Episode} from '../TV';

export class SeasonDetail {

  constructor(
    public _id?: string,
    public air_date?: string,
    public episodes?: Array<SeasonResult>,
    public name?: string,
    public overview?: string,
    public id?: string,
    public poster_path?: string,
    public season_number?: string,
  ) {
  }
}

export class SeasonResult extends Episode {

  constructor(
    public air_date?: string,
    public episode_number?: number,
    public id?: number,
    public name?: string,
    public overview?: string,
    public production_code?: string,
    public season_number?: string,
    public show_id?: number,
    public still_path?: string,
    public vote_average?: number,
    public vote_count?: number,
    public crew?: Array<Crew>,
    public guests_stars?: Array<any>
  ) {
    super(air_date,
      episode_number,
      id,
      name,
      overview,
      production_code,
      season_number,
      show_id,
      still_path,
      vote_average,
      vote_count);
  }
}

