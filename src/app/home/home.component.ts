import { Component } from '@angular/core';
import { HomeHeroComponent } from './components/hero/home-hero.component';
import { HomeDepartmentsComponent } from './components/departments/home-departments.component';
import { HomeHighlightsComponent } from './components/highlights/home-highlights.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeroComponent, HomeDepartmentsComponent, HomeHighlightsComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}
