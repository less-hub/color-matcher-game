import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ColorMatcherFacade } from './+state/facade';
import { colorMatcherFeature } from './+state/reducer';
import { ColorMatcherComponent } from './color-matcher.component';
import { ColorMatcherRoutingModule } from './color-matcher.routing';
import { ColorMatcherFormComponent } from './pure-color-matcher/color-matcher-form/color-matcher-form.component';
import { PureColorMatcherComponent } from './pure-color-matcher/pure-color-matcher.component';

@NgModule({
  declarations: [
    ColorMatcherComponent,
    PureColorMatcherComponent,
    ColorMatcherFormComponent,
  ],
  imports: [
    CommonModule,
    ColorMatcherRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(colorMatcherFeature),
  ],
  providers: [ColorMatcherFacade],
})
export class ColorMatcherModule {}
