import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoryMakerComponent } from './components/story-maker/story-maker.component';
import { StoryOptionsComponent } from './components/story-options/story-options.component';
import { VocabularyConfigurationComponent } from './components/vocabulary-configuration/vocabulary-configuration.component';
import { VocabularyService } from './services/vocabulary.service';
import { MapToIterable } from './services/map-to-iterable.pipe';

import { routing } from './app.routing';

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule, routing ],
  declarations: [ AppComponent, StoryMakerComponent, StoryOptionsComponent, MapToIterable, VocabularyConfigurationComponent ],
  bootstrap: [ AppComponent ],
  providers: [ VocabularyService ]
})
export class AppModule { }