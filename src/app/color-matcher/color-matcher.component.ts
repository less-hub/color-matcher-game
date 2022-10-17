import { Component } from '@angular/core';
import { timer, interval, takeUntil, Observable } from 'rxjs';
import { ColorMatcherFacade } from './+state/facade';

export enum AvailableColors {
  Lightblue = 'lightblue',
  Blue = 'blue',
  Organe = 'orange',
  Violet = 'violet',
  Green = 'green',
  Darkgreen = 'darkgreen',
}

export const guessDuration: number = 2000;
export const guessDelta: number = guessDuration / 25;

@Component({
  selector: 'cm-color-matcher',
  template: `<cm-pure-color-matcher
    [guessColor]="(guessColor$ | async) || availableColors.Blue"
    [isPlaying]="(isPlaying$ | async) || false"
    [hasPlayerChosen]="(hasPlayerChosen$ | async) || false"
    [winnerText]="(winnerText$ | async) || 'Still playing'"
    [isColoringBox]="(isColoringBox$ | async) || false"
    ($startGame)="startGame()"
  ></cm-pure-color-matcher>`,
  styleUrls: ['color-matcher.component.css'],
})
export class ColorMatcherComponent {
  public availableColors = AvailableColors;

  public guessColor$: Observable<AvailableColors> =
    this.colorMatcherFacade.guessColor$;

  public isPlaying$: Observable<boolean> = this.colorMatcherFacade.isPlaying$;

  public hasPlayerChosen$: Observable<boolean> =
    this.colorMatcherFacade.hasUserChosen$;

  public isColoringBox$: Observable<boolean> =
    this.colorMatcherFacade.isColoringBox$;

  public winnerText$: Observable<string> = this.colorMatcherFacade.winnerText$;

  public startGame(): void {
    this.colorMatcherFacade.startGame();
    const timer$ = timer(guessDuration);

    interval(guessDelta)
      .pipe(takeUntil(timer$))
      .subscribe({
        next: () => this.colorMatcherFacade.setGuessColor(this.randomColor()),
        complete: () => this.colorMatcherFacade.guessColorSetted(),
      });
  }

  private randomColor(): AvailableColors {
    const index = Math.floor(
      Math.random() * Object.keys(AvailableColors).length
    );
    const color = Object.values(AvailableColors)[index];

    return color;
  }

  constructor(private colorMatcherFacade: ColorMatcherFacade) {}
}
