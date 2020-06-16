import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ResponseTopHeadlines } from "../interfaces/interfaces";
import { environment } from "../../environments/environment";

const apiKey = environment.apiKey;
const apiUlr = environment.apiUlr;

const headers = new HttpHeaders({
  "X-Api-key": apiKey
});

@Injectable({
  providedIn: "root"
})
export class NewsService {
  headlinesPage = 0;

  currentCategory = "";
  categoryPage = 0;

  currentCountry = "";
  countryPage = 0;

  constructor(private http: HttpClient) { }

  private runQuery<T>(query: string) {
    query = apiUlr + query;

    return this.http.get<T>(query, { headers });
  }

  getTopHeadlines(country: string) {
    if (this.currentCategory === country) {
      this.countryPage++;
    } else {
      this.countryPage = 1;
      this.currentCountry = country;
    }

    return this.runQuery<ResponseTopHeadlines>(
      `/top-headlines?country=${country}&page=${this.headlinesPage}`
    );
  }

  getTopHeadlinesCategory(category: string) {
    if (this.currentCategory === category) {
      this.categoryPage++;
    } else {
      this.categoryPage = 1;
      this.currentCategory = category;
    }

    return this.runQuery<ResponseTopHeadlines>(
      `/top-headlines?country=ar&category=${category}&page=${this.categoryPage}`
    );
  }
}
