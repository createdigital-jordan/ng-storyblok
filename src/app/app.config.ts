import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import {
    provideNgStoryblok,
    withAccessToken,
    withApiPlugin,
    withBloks,
    withCacheConfig,
    withDefaultPath,
    withNgOptimisedImage,
} from '@geometricpanda/ng-storyblok/config';

import { appRoutes } from './app.routes';
import { BLOK } from './cms-components';

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch()),
        provideRouter(appRoutes, withComponentInputBinding()),
        provideNgStoryblok(
            withAccessToken('ng4mrSeUen31b5G1kAu8eQtt'),
            withApiPlugin(),
            withCacheConfig({ type: 'none' }),
            withDefaultPath('home'),
            withNgOptimisedImage(),
            withBloks({
                [BLOK.PAGE]: () => import('./cms-components/page-blok'),
                [BLOK.TEASER]: () => import('./cms-components/teaser-blok'),
                [BLOK.GRID]: () => import('./cms-components/grid-blok'),
                [BLOK.FEATURE]: () => import('./cms-components/feature-blok'),
            }),
        ),
    ],
};
