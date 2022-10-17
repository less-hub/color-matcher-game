import { Component } from '@angular/core';
import { ColorMatcherFacade } from '../../+state/facade';
import { AvailableColors } from '../../color-matcher.component';

@Component({
  selector: 'cm-color-matcher-form',
  templateUrl: 'color-matcher-form.component.html',
  styleUrls: ['color-matcher-form.component.scss'],
})
export class ColorMatcherFormComponent {
  public availableColors = AvailableColors;

  public colorChosen(col: AvailableColors) {
    this.colorMatcherFacade.setUserColor(col);
  }

  constructor(private colorMatcherFacade: ColorMatcherFacade) {}
}
