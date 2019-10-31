import { Component, OnInit, Input } from "@angular/core";
import { Article } from "src/app/interfaces/interfaces";
import { ActionSheetController, Platform } from "@ionic/angular";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { DataLocalService } from "src/app/services/data-local.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
  @Input() newsItem: Article;
  @Input() index: number;
  @Input() onFavorites;

  constructor(
    private iab: InAppBrowser,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private datalocalService: DataLocalService,
    private platform: Platform
  ) {}

  ngOnInit() {}

  openNewsItem() {
    const browser = this.iab.create(this.newsItem.url, "_system");
  }

  async loadMenu() {
    let saveRemoveBtn;

    if (this.onFavorites) {
      saveRemoveBtn = {
        text: "Remove Favorite",
        icon: "trash",
        cssClass: "action-dark",
        handler: () => {
          console.log("Remove from Favoriters");
          this.datalocalService.removeNewsItem(this.newsItem);
        }
      };
    } else {
      saveRemoveBtn = {
        text: "Favorite",
        icon: "star",
        cssClass: "action-dark",
        handler: () => {
          console.log("Favorito");
          this.datalocalService.saveNewsItem(this.newsItem);
        }
      };
    }

    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: "Share",
          icon: "share",
          cssClass: "action-dark",
          handler: () => {
            console.log("Share clicked");
            this.shareNews();
          }
        },
        saveRemoveBtn,
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          cssClass: "action-dark",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });

    await actionSheet.present();
  }

  shareNews() {
    if (this.platform.is("cordova")) {
      this.socialSharing.share(
        this.newsItem.title,
        this.newsItem.source.name,
        "",
        this.newsItem.url
      );
    } else {
      if (navigator["share"]) {
        navigator["share"]({
          title: this.newsItem.title,
          text: this.newsItem.description,
          url: this.newsItem.url
        })
          .then(() => console.log("Successful share"))
          .catch(error => console.log("Error sharing", error));
      } else {
        console.log("Not supported");
      }
    }
  }
}
