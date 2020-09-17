import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconButton } from './button-icon.model';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.css']
})
export class ButtonIconComponent implements OnInit {
  @Input() config: IconButton;

  @Output() onClickIconButton = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
