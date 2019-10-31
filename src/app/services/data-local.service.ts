import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Article } from "../interfaces/interfaces";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class DataLocalService {
  news: Article[] = [];

  constructor(
    private storage: Storage,
    public toastController: ToastController
  ) {
    this.loadFavorites();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  saveNewsItem(newsItem: Article) {
    const existe = this.news.find(resp => resp.title === newsItem.title);

    if (!existe) {
      this.news.unshift(newsItem);
      this.storage.set("favorites", this.news);
    }

    this.presentToast("Saved on Favorites");
  }

  async loadFavorites() {
    const favorites = await this.storage.get("favorites");

    if (favorites) {
      this.news = favorites;
    }
  }

  removeNewsItem(newsItem: Article) {
    this.news = this.news.filter(resp => resp.title !== newsItem.title);
    this.storage.set("favorites", this.news);
    this.presentToast("Removed from Favorites");
  }
}
