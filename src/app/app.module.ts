import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { StoryMakerComponent } from './components/story-maker/story-maker.component';
import { StoryOptionsComponent } from './components/story-options/story-options.component';
import { VocabularyConfigurationComponent } from './components/vocabulary-configuration/vocabulary-configuration.component';
import { WordSettingsComponent } from './components/word-settings/word-settings.component';
import { VocabularyService } from './services/vocabulary.service';
import { MapToIterable } from './pipes/map-to-iterable.pipe';
import { Capitalize } from './pipes/capitalize.pipe';
import { WordLabel } from './pipes/word-label.pipe';

import { routing } from './app.routing';

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule, routing ],
  declarations: [ AppComponent, StoryMakerComponent, StoryOptionsComponent, MapToIterable, Capitalize, VocabularyConfigurationComponent, WordSettingsComponent, WordLabel ],
  bootstrap: [ AppComponent ],
  providers: [
    VocabularyService,
    { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/'}
  ]
})
export class AppModule { }