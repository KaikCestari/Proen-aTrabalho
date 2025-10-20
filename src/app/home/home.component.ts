import { Component } from '@angular/core';
import { HomeHeroComponent } from './components/hero/home-hero.component';
import { HomeDepartmentsComponent } from './components/departments/home-departments.component';
import { HomeHighlightsComponent } from './components/highlights/home-highlights.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeroComponent, HomeDepartmentsComponent, HomeHighlightsComponent],
  template: `
    <div class="home">
      <app-home-hero />
      <app-home-departments />
      <app-home-highlights />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .home {
        display: grid;
        gap: 3rem;
      }
    `
  ]
})
export class HomeComponent {}
