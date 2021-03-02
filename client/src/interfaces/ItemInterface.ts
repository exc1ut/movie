export interface IMovie {
  id: number;
  title: string;
  budget?: number;
  duration?: number;
  country: [
    {
      id: number;
      name: string;
      name_uz: string;
      name_ru: string;
      name_en: string;
    }
  ];
  description: string;
  poster_160: string;
  poster_360: string;
  poster: string;
  show: boolean;
  lang?: {
    ru?: string;
    en?: string;
    uz?: string;
  };
  content_type: number;
  slogan: string;
  rating_kinopoisk: number;
  rating_imdb: number;
  age: number;
  screenshots: [
    {
      id: number;
      link: string;
    }
  ];
  seasons: [
    {
      episodes: [
        {
          episode_number: number;
          files: {
            en?: string;
            ru?: string;
            uz?: string;
          };
          id: number;
          season_number: number;
          title?: string;
          views: number;
        }
      ];
      id: number;
      release_time: string;
      season_number;
    }
  ];
}
