import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ColorMatcherState } from './reducer';
import * as ColorMatcherActions from './actions';
import * as ColorMatcherSelector from './selectors';
import { AvailableColors } from '../color-matcher.component';

@Injectable()
export class ColorMatcherFacade {
  public isPlaying$: Observable<boolean> = this.store.select(
    ColorMatcherSelector.selectIsPlaying
  );

  public hasUserChosen$: Observable<boolean> = this.store.select(
    ColorMatcherSelector.selectHasUserChosen
  );

  public guessColor$: Observable<AvailableColors> = this.store.select(
    ColorMatcherSelector.selectGuessColor
  );

  public isColoringBox$: Observable<boolean> = this.store.select(
    ColorMatcherSelector.selectIsColoringBox
  );

  public userColor$: Observable<AvailableColors> = this.store.select(
    ColorMatcherSelector.selectUserColor
  );

  public winnerText$: Observable<string> = this.store.select(
    ColorMatcherSelector.selectWinnerText
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
