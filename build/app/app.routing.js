"use strict";
var router_1 = require('@angular/router');
var story_maker_component_1 = require('./components/story-maker/story-maker.component');
var vocabulary_configuration_component_1 = require('./components/vocabulary-configuration/vocabulary-configuration.component');
var appRoutes = [
    {
        path: '',
        component: story_maker_component_1.StoryMakerComponent
    },
    {
        path: 'vocabulary',
        component: vocabulary_configuration_component_1.VocabularyConfigurationComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });

//# sourceMappingURL=http://localhost:4057/build/app/app.routing.js.map
