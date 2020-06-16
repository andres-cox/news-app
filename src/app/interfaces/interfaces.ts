export interface ResponseTopHeadlines {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}

export interface Source {
  id?: string;
  name: string;
}

export interface CountryISO {
  name: string;
  alpha_2: string;
  alpha_3: string;
  country_code: string;
  iso_3166_2: string;
  region: string;
  sub_region: string;
  intermediate_region: string;
  region_code: string;
  sub_region_code: string;
  intermediate_region_code: string;
}