import { Component } from '@angular/core';
import { HomeHeroComponent } from './components/hero/hero.component';
import { HomeDepartmentsComponent } from './components/departments/departments.component';
import { HomeHighlightsComponent } from './components/highlights/highlights.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeroComponent, HomeDepartmentsComponent, HomeHighlightsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
