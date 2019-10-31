import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { NewsComponent } from "./news/news.component";
import { ItemComponent } from "./news/item/item.component";

@NgModule({
  declarations: [NewsComponent, ItemComponent],
  exports: [NewsComponent],
  imports: [CommonModule, IonicModule]
})
export class ComponentsModule {}
