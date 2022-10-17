import { createSelector } from '@ngrx/store';
import { colorMatcherFeature } from './reducer';

export const selectWinnerText = createSelector(
  colorMatcherFeature.selectColorMatcherState,
  (state) =>
    state.guessColor === state.userColor
      ? "Damn, you won! Let's play again!"
      : 'HA-HA! Looser.'
);

export const ColorMatcherSelectors = (({ name, reducer, ...old }) => old)({
  ...colorMatcherFeature,
  selectWinnerText,
});
