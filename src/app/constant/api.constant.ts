import {ListRef} from '../models/refList';

export const HOST = 'https://api.themoviedb.org/';
const PORT = '';
export const KEY = '?api_key=decbc3e9be01bed1040f7926218e7fd1';
const TOKEN_V4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWNiYzNlOWJlMDFiZWQxMDQwZjc5MjYyMThlN2ZkMSIsInN1YiI6IjVjYWYxNzBmOTI1MTQxMmZhZDIxYzA0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vAE38LnH6C60MEcYDL1rUMgmBAWR2pVugNFIkoFhdK8';

/*
  images (need size and filename + extension):
  size: see configuration for each type of images
  https://image.tmdb.org/t/p/original//tpFpsqbleCzEE2p5EgvUq6ozfCA.png
*/
export const IMAGES_HOST = `https://image.tmdb.org/t/p/`;

// request id required at end of this endpoint
const COMPANIES = `${HOST}3/company/`;
const CREDITS = `${HOST}3/credit/`;

export const MOVIE = `${HOST}3/movie`;
export const TV_SHOW = `${HOST}3/tv`;
const PERSON = `${HOST}3/person`;

// Ref List id not required
const CERTIFICATION = {
  movie: `${HOST}3/certification/movie/list`,
  tv: `${HOST}3/certification/tv/list`
};

export const MOVIES_LIST = `${HOST}3/genre/movie/list`; // list genre of movie
export const TV_LIST = `${HOST}3/genre/tv/list`; // list genre of tv

/*
 * MOVIES
 */

export const DISCOVER_MOVIE = `${HOST}3/discover/movie`;

// MOVIE suffix after movie_id
export const MOVIE_SUFFIX = {
  account_states : '/account_states',
  titles: '/alternative_titles',
  changes: '/changes', // return last 24hours or use query 'start_date' and 'end_date'
  credits: '/credits',
  externalIds: '/external_ids',
  images: '/images',
  keywords: '/keywords',
  releases: '/release_dates',
  videos: '/videos',
  translations: '/translations',
  recommendations: '/recommendations',
  similar: '/similar',
  reviews: '/reviews',
  lists: '/lists',
};

// MOVIES suffix without movies_id
export const MOVIES_SUFFIX = {
  latest: '/latest',
  now: '/now_playing',
  popular: '/popular',
  top: '/top_rated',
  upcoming: '/upcoming'
};

/*
    PERSON
 */

const PERSON_SUFFIX = {
  changes: '/changes',
  movie_credits: '/movie_credits',
  tv_credits: '/tv_credits',
  combined_credits: '/combined_credits',
  external_ids: '/external_ids',
  images: '/images',
  tagged_images: '/tagged_images',
  translations: '/translations'
};

const PERSONS_SUFFIX = {
  latest: '/latest',
  popular: '/popular'
};

const REVIEW = `${HOST}3/review/`; // need review_id

const SEARCH = `${HOST}3/search/`;
const SEARCH_SUFFIX = { // Need serialize attribute string query
  company: '/company',
  collection: '/collection',
  keyword: '/keyword',
  movie: '/movie',
  multi: '/multi',
  person: '/person',
  tv: 'tv'
};

/*
*  TV SHOWS
*/

export const DISCOVER_TV = `${HOST}3/discover/tv`;

export const TVSHOW_SUFFIX = {
  account_states : '/account_states',
  titles: '/alternative_titles',
  changes: '/changes', // return last 24hours or use query 'start_date' and 'end_date'
  content_rating: '/content_ratings',
  credits: '/credits',
  episode_groups: '/episode_groups',
  externalIds: '/external_ids',
  images: '/images',
  keywords: '/keywords',
  recommendations: '/recommendations',
  reviews: '/reviews',
  screenedTheatrically: '/screened_theatrically',
  translations: '/translations',
  similar: '/similar',
  videos: '/videos',
  lists: '/lists',
};

export const TVSHOWS_SUFFIX = {
  latest: '/latest',
  airingToday: '/airing_today',
  onTheAir: '/on_the_air',
  popular: '/popular',
  topRated: 'top_rated'
};

const SEASON = '/season'; // require a tv_id before
const SEASON_SUFFIX = { // require a number of season before
  changes: '/changes',
  account_states: '/account_states',
  credits: '/credits',
  externalIds: '/external_ids',
  images: '/images',
  videos: '/videos',
};

const EPISODE = '/episode'; // require a number of season before and an episode number after
const EPISODE_SUFFIX = {
  changes: '/changes', // require an episode_id but with tv endpoint only like '/tv/episode/{episode_id}/'
  account_states: '/account_states',
  credits: '/credits',
  externalIds: '/external_ids',
  images: '/images',
  translations: '/translations',
  videos: '/videos',
};

const EPISODE_GROUP = '/episode_group'; // require an id

/* external IDs, example :
 https://api.themoviedb.org/3/find/tt1392190?api_key=decbc3e9be01bed1040f7926218e7fd1&language=fr-FR&external_source=IMDb_ID
*/
const FIND = `${HOST}3/find/`;

/**
 *  Trending
 */
const TRENDING = `${HOST}3/trending/`; // trending media and trending time
const TRENDING_MEDIA: Array<ListRef> = [
  {id: 1, name: 'all'},
  {id: 2, name: 'movie'},
  {id: 3, name: 'tv'},
  {id: 4, name: 'person'}
];
const TRENDING_TIME_WINDOWS: Array<ListRef> = [
  {id: 1, name: 'day'},
  {id: 3, name: 'week'}
];

// Configuration
const CONFIG = `${HOST}3/configuration/`;
const CONFIG_COUNTRIES = `${CONFIG}/countries/`;
const CONFIG_LANGUAGES = `${CONFIG}/languages/`;
const CONFIG_PRIMARY_TRANSLATION = `${CONFIG}/primary_translations`;
const CONFIG_TIMEZONES = `${CONFIG}/timezones`;
