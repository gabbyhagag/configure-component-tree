import { Component, Input, OnInit } from '@angular/core';
import { CardsList } from './cards-list.model';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {
  @Input() config: CardsList;
  constructor() {}

  ngOnInit() {}
}
