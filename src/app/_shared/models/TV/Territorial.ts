import { ResultRating } from './Rating';
import {ResultTranslation } from './Translation';

export class Territorial {

  constructor(
    public id: number,
    public ratings : Array<ResultRating>,
    public translations: Array<ResultTranslation>
  ) {}
}
