import { Component } from '@angular/core';
import { HomeHeroComponent } from './components/hero/home-hero.component';
import { HomeDepartmentsComponent } from './components/departments/home-departments.component';
import { HomeHighlightsComponent } from './components/highlights/home-highlights.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeroComponent, HomeDepartmentsComponent, HomeHighlightsComponent],
  templateUrl: './index.html',
  styleUrl: './styles.scss'
})
export class HomeComponent {}
