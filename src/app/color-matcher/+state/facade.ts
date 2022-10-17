import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { colorMatcherFeature, ColorMatcherState } from './reducer';
import * as ColorMatcherActions from './actions';
import { AvailableColors } from '../color-matcher.component';
import { ColorMatcherSelectors } from './selectors';

@Injectable()
export class ColorMatcherFacade {
  public isPlaying$: Observable<boolean> = this.store.select(
    ColorMatcherSelectors.selectIsPlaying
  );

  public hasUserChosen$: Observable<boolean> = this.store.select(
    ColorMatcherSelectors.selectHasUserChosen
  );

  public guessColor$: Observable<AvailableColors> = this.store.select(
    ColorMatcherSelectors.selectGuessColor
  );

  public isColoringBox$: Observable<boolean> = this.store.select(
    ColorMatcherSelectors.selectIsColoringBox
  );

  public userColor$: Observable<AvailableColors> = this.store.select(
    ColorMatcherSelectors.selectUserColor
  );

  public winnerText$: Observable<string> = this.store.select(
    ColorMatcherSelectors.selectWinnerText
  );

  public startGame(): void {
    this.store.dispatch(ColorMatcherActions.startGame());
  }

  public setGuessColor(color: AvailableColors) {
    this.store.dispatch(ColorMatcherActions.setGuessColor({ color }));
  }

  public guessColorSetted() {
    this.store.dispatch(ColorMatcherActions.guessColorSetted());
  }

  public setUserColor(color: AvailableColors) {
    this.store.dispatch(ColorMatcherActions.setUserColor({ color }));
  }

  constructor(private store: Store<ColorMatcherState>) {}
}
