import { createAction, props } from '@ngrx/store';
import { AvailableColors } from '../color-matcher.component';

export const startGame = createAction('[Color Matcher] Start Game');

export const setGuessColor = createAction(
  '[Color Matcher] Set Guess Color',
  props<{ color: AvailableColors }>()
);

export const guessColorSetted = createAction(
  '[Color Matcher] Color has been set'
);

export const setUserColor = createAction(
  '[Color Matcher] Set User Color',
  props<{ color: AvailableColors }>()
);
