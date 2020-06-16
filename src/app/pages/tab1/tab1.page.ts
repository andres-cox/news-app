import { Component, OnInit, ViewChild } from "@angular/core";
import { NewsService } from "../../services/news.service";
import { Article, CountryISO } from "../../interfaces/interfaces";
import { HttpClient } from "@angular/common/http";
import { IonSegment } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  region: string = "America";
  country: string = "ar";
  countries = [];
  countriesAll: CountryISO[] = [];
  newsApiCountries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"]
  regions = ["America", "Africa", "Asia", "Europe", "Oceania"];

  news: Article[] = [];

  @ViewChild('country') segmentCountries: IonSegment;


  constructor(private newsService: NewsService,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.segmentCountries.value = 'Argentina';
    this.loadNews(this.country);

    this.httpClient.get('./assets/ISO-3166-countries.json').subscribe(
      data => {
        this.countries = data as string[];
        this.countriesAll = this.countries.filter(el => this.newsApiCountries.includes(el.alpha_2.toLowerCase()));
        this.countries = this.countriesAll;
      }
    );

  }

  // loadData(event) {
  //   this.loadNews(event);
  // }

  changeRegion(event) {
    this.countries = this.countriesAll.filter(el => el.region == event.detail.value);
  }

  changeCountry(event) {
    this.news = [];
    this.loadNews(event.detail.value.alpha_2.toLowerCase());
    console.log(event.detail.value.alpha_2)
  }

  // loadNews(country: string, event?) {
  //   this.newsService.getTopHeadlines(country).subscribe(resp => {
  //     // if (resp.articles.length === 0) {
  //     //   event.target.disabled = true;
  //     //   event.target.complete();
  //     //   return;
  //     // }

  //     // this.news = resp.articles;
  //     this.news.push(...resp.articles);

  //     if (event) {
  //       event.target.complete();
  //     }
  //   });
  // }

  loadNews(country: string, event?) {
    this.newsService.getTopHeadlines(country).subscribe(resp => {
      this.news.push(...resp.articles);

      if (event) {
        event.target.complete();
      }
    });
  }

  loadData(event) {
    this.loadNews(this.country, event);
  }
}
