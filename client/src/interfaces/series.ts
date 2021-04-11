export interface ViewResponse {
  item: Item;
  seria: Episode;
  recommend: Recommend[];
}

interface Recommend {
  id: number;
  views: number;
  age: number;
  files: Files;
  title: string;
  slogan: string;
  description: string;
  budget: number | string;
  country: Country[];
  release_time: string;
  poster_160: string;
  poster_320: string;
  keywords: Keyword[];
  rating_imdb: string;
  rating_kinopoisk: string;
  is_serial: boolean;
}

interface Item {
  id: number;
  title: string;
  budget: string;
  duration: string;
  country: Country[];
  description: string;
  poster_160: string;
  poster_320: string;
  poster: string;
  show: boolean;
  lang: Lang;
  trailers: any[];
  video_quality: string;
  audio_quality: string;
  persons: any[];
  content_type: number;
  slogan: string;
  rating_kinopoisk?: any;
  rating_imdb?: any;
  age: number;
  screenshots: any[];
  release_time: string;
  views: number;
  keywords: Keyword[];
  facts: Fact[];
  awards: any[];
  is_serial: boolean;
  files: Files;
  seasons: Season[];
  last_season_released_at: number;
}

interface Season {
  id: number;
  release_time: string;
  serial_id: number;
  season_number: number;
  views: number;
  title: string;
  episodes: Episode[];
}

interface Episode {
  id: number;
  episode_number: number;
  season_number: number;
  title: string;
  files: Files;
  views: number;
}

interface Files {
  ru: string;
  en: string;
  uz: string;
}

interface Fact {
  title: string;
}

interface Keyword {
  id: number;
  title: string;
  frequency?: any;
  name_uz: string;
  name_ru: string;
  name_en: string;
}

interface Lang {
  ru: string;
}

interface Country {
  id: number;
  name: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
}
