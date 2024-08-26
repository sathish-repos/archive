import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { About } from '../model/about.types';
import { Home } from '../model/home.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  user = signal<string>('initial');
  baseUrl = `https://sathish-repos.github.io/assets/projects/shared-portfolio`;
  homePageEndpoint = `/aem/pages/home-page.json`;
  aboutPageEndpoint = `/aem/pages/home-page.json`;

  getHomePageStaticData(): Observable<Home> {
    return this.http.get<Home>(
      `${this.baseUrl}/${this.user + this.homePageEndpoint}`
    );
  }

  getAboutPageStaticData(): Observable<About> {
    return this.http.get<About>(
      `${this.baseUrl}/${this.user + this.aboutPageEndpoint}`
    );
  }
}
