export interface IContent {
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
  video_quality: number;
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
  season_number?: any;
  episode_number?: any;
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
  en?: string;
}

interface Country {
  id: number;
  name: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
}
