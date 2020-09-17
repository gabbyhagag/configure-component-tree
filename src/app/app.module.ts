import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatWidgetComponent } from './cat-widget/cat-widget.component';
import { CardComponent } from './card/card.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import icons from '../assets/svg/svg-icons';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  declarations: [
    AppComponent,
    CatWidgetComponent,
    CardComponent,
    CardsListComponent,
    ButtonIconComponent,
  ],
  imports: [BrowserModule, SvgIconsModule.forRoot({
      icons
    })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
