import { Component } from '@angular/core';
import { ColorMatcherFacade } from './color-matcher/+state/facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public startGame(): void {
    this.colorMatcherFacade.startGame();
  }

  constructor(private colorMatcherFacade: ColorMatcherFacade) {}
}
