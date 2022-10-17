import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ColorMatcherState, COLOR_MATCHER_FEATURE_KEY } from './reducer';

const selectColorMatcherState = createFeatureSelector<ColorMatcherState>(
  COLOR_MATCHER_FEATURE_KEY
);

export const selectIsPlaying = createSelector(
  selectColorMatcherState,
  (state) => state.isPlaying
);

export const selectGuessColor = createSelector(
  selectColorMatcherState,
  (state) => state.guessColor
);

export const selectUserColor = createSelector(
  selectColorMatcherState,
  (state) => state.userColor
);

export const selectIsColoringBox = createSelector(
  selectColorMatcherState,
  (state) => state.isColoringBox
);

export const selectHasUserChosen = createSelector(
  selectColorMatcherState,
  (state) => state.hasUserChosen
);

export const selectWinnerText = createSelector(
  selectColorMatcherState,
  (state) =>
    state.guessColor === state.userColor
      ? "Damn, you won! Let's play again!"
      : 'HA-HA! Looser.'
);
