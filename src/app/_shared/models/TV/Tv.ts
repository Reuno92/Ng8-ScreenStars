import {ListRef} from '../refList';

export class Tv {
  constructor(
    public backdrop_path?: string | null,
    public created_by ?: Array<Created>,
    public episode_run_time?: Array<number>,
    public first_air_date?: string,
    public genres?: Array<ListRef>,
    public homepage?: string,
    public id?: number,
    public in_production?: boolean,
    public languages?: Array<string>,
    public last_air_date?: string,
    public last_episode_to_air?: Episode,
    public name?: string,
    public next_episode_to_air?: Episode | null,
    public networks?: Array<Company>,
    public number_of_episodes?: number,
    public number_of_seasons?: number,
    public origin_country?: Array<string>,
    public original_language?: string,
    public original_name?: string,
    public overview?: string,
    public popularity?: number,
    public poster_path?: string | null,
    public production_companies?: Array<Company>,
    public seasons?: Array<Season>,
    public status?: string,
    public type?: string,
    public vote_average?: number,
    public vote_count?: number
  ) {}
}

class Created {
  constructor(
    public id?: number,
    public credit_id?: string,
    public name?: string,
    public profile_path?: string,
  ) {}
}

class Episode {
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
  ) {}
}

class Season {
  constructor(
    public air_date?: string,
    public season_count?: number,
    public id?: number,
    public name?: string,
    public overview?: string,
    public poster_path?: string,
    public season_number?: number,
  ) {}
}

class Company {
  constructor(
    public id?: number,
    public name?: string,
    public logo_path?: string,
    public origin_country?: string,
  ) {}
}
