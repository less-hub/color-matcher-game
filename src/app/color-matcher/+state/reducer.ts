import { createReducer, on } from '@ngrx/store';
import { AvailableColors } from '../color-matcher.component';
import * as ColorMatcherActions from './actions';

export const COLOR_MATCHER_FEATURE_KEY = 'colorMatcher';

export interface ColorMatcherState {
  isPlaying: boolean;
  hasUserChosen: boolean;
  isColoringBox: boolean;
  guessColor: AvailableColors;
  userColor: AvailableColors;
}

export const initialColorMatcherState: ColorMatcherState = {
  isPlaying: false,
  hasUserChosen: false,
  isColoringBox: false,
  guessColor: AvailableColors.Blue,
  userColor: AvailableColors.Blue,
};

export const colorMatcherReducer = createReducer(
  initialColorMatcherState,
  on(ColorMatcherActions.startGame, (state, action) => {
    return {
      ...initialColorMatcherState,
      isColoringBox: true,
    };
  }),
  on(ColorMatcherActions.setGuessColor, (state, action) => {
    return {
      ...state,
      isPlaying: true,
      guessColor: action.color,
    };
  }),
  on(ColorMatcherActions.guessColorSetted, (state, action) => {
    return {
      ...state,
      isColoringBox: false,
    };
  }),
  on(ColorMatcherActions.setUserColor, (state, action) => {
    return {
      ...state,
      isPlaying: true,
      hasUserChosen: true,
      userColor: action.color,
    };
  })
);
