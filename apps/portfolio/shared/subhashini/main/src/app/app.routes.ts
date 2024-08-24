import { Route } from '@angular/router';
import { AboutComponent, HomeComponent } from '@anx/portfolio-shared-smart';

export const appRoutes: Route[] = [
  {
    path: 'about',
    title: 'About',
    loadComponent: () => AboutComponent,
  },
  {
    path: '',
    title: 'Subhashini.dev',
    loadComponent: () => HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
