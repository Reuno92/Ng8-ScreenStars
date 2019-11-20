export class Credit {

  constructor(
    public cast: Array<Cast>,
    public crew: Array<Crew>
  ) {}
}

class Cast {

  constructor(
    public character: string,
    public credit_id: string,
    public gender: number | null,
    public id: number,
    public name: string,
    public order: number,
    public profile_path: string | null
  ) {}
}

export class Crew {

  constructor(
    public credit_id: string,
    public department: string,
    public gender: number | null,
    public id: string,
    public job: string,
    public name: string,
    public profile_path: string | null
  ) {}
}
