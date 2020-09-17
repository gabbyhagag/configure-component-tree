import { Component, OnInit } from '@angular/core';
import { CardsList } from '../cards-list/cards-list.model';

@Component({
  selector: 'app-cat-widget',
  templateUrl: './cat-widget.component.html',
  styleUrls: ['./cat-widget.component.css']
})
export class CatWidgetComponent implements OnInit {
  postsCardList: CardsList;
  textButton = 'click';

  constructor() {}

  ngOnInit() {
    this.postsCardList = {
      title: 'this is a list of cards',
      cards: [
        {
          title: 'this is a first card',
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          iconButton: {
            text: 'click',
            iconKey: 'cogwheel',
            action: event => {
              this.postsCardList.cards[0].title = 'it work!!';
              this.postsCardList.cards[0].description =
                'next click will replace the icon of last button with "tack"';
              this.postsCardList.cards[0].iconButton.action = () => {
                this.postsCardList.cards[2].iconButton.iconKey = 'tack';
              };
            }
          }
        },
        {
          title: 'SECOND CARD!!',
          description:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
          iconButton: {
            text: this.textButton,
            iconKey: 'focus',
            action: () => {
              this.toggleTextButton();
            }
          }
        },
        {
          title: 'OK last card',
          description:
            'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
          iconButton: {
            text: 'click',
            iconKey: 'calculator',
            action: event => {
              console.log('click', event);
            }
          }
        }
      ]
    };
  }

  toggleTextButton() {
    if (this.postsCardList.cards[1].iconButton.text === 'click') {
      this.postsCardList.cards[1].iconButton.text = 'push now';
    } else this.postsCardList.cards[1].iconButton.text = 'click';
  }
}
