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

  newsApiCountries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"]
  regions = ["America", "Africa", "Asia", "Europe", "Oceania"];

  countries: CountryISO[] = [];
  countriesAll: CountryISO[] = [];
  newsCountry: string;
  news: Article[] = [];

  @ViewChild('region', { static: true }) segmentRegion;
  @ViewChild('country', { static: true }) segmentCountries;


  constructor(private newsService: NewsService,
    private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get('./assets/ISO-3166-countries.json').subscribe(
      data => {
        const countries = data as CountryISO[];
        this.countriesAll = countries.filter(el => this.newsApiCountries.includes(el.alpha_2.toLowerCase()));
        this.segmentRegion.value = this.regions[0];
        this.countries = this.countriesAll.filter(el => el.region == this.regions[0]);
        this.segmentCountries.value = this.countries[0];
        this.loadNews(this.segmentCountries.value.alpha_2.toLowerCase());
        this.newsCountry = this.segmentCountries.value.name;
      }
    );

  }

  changeRegion(event) {
    this.countries = this.countriesAll.filter(el => el.region == event.detail.value);
  }

  changeCountry(event) {
    this.news = [];

    this.loadNews(event.detail.value.alpha_2.toLowerCase());

    this.newsCountry = event.detail.value.name;
  }

  loadNews(country: string, event?) {
    this.newsService.getTopHeadlines(country).subscribe(resp => {
      this.news.push(...resp.articles);

      if (event) {
        event.target.complete();
      }
    });
  }

  loadData(event) {
    this.loadNews(this.segmentCountries.value.alpha_2.toLowerCase(), event);
  }
}
