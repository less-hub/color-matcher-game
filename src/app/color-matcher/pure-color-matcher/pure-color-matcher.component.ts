import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AvailableColors } from '../color-matcher.component';

@Component({
  selector: 'cm-pure-color-matcher',
  templateUrl: 'pure-color-matcher.component.html',
  styleUrls: ['pure-color-matcher.component.css'],
})
export class PureColorMatcherComponent {
  @Input() public guessColor!: AvailableColors;
  @Input() public isPlaying!: boolean;
  @Input() public hasPlayerChosen!: boolean;
  @Input() public isColoringBox!: boolean;
  @Input() public winnerText!: string;

  @Output() public $startGame = new EventEmitter<boolean>();

  public onStartGame() {
    this.$startGame.emit(true);
  }

  constructor() {}
}
