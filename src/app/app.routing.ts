import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryMakerComponent } from './components/story-maker/story-maker.component';
import { VocabularyConfigurationComponent } from './components/vocabulary-configuration/vocabulary-configuration.component';

const appRoutes : Routes = [
  {
    path: '',
    component: StoryMakerComponent
  },

  {
    path: 'vocabulary',
    component: VocabularyConfigurationComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true });