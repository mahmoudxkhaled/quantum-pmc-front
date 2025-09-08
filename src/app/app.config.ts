import { ApplicationConfig, ENVIRONMENT_INITIALIZER, NgZone, inject, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { NavigationEnd, Router, provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { filter } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'disabled',
        anchorScrolling: 'enabled'
      })
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => {
        const router = inject(Router);
        const zone = inject(NgZone);
        zone.runOutsideAngular(() => {
          router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
            if (typeof window !== 'undefined') {
              try {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              } catch {
                window.scrollTo(0, 0);
              }
            }
          });
        });
      }
    }
  ]
};
