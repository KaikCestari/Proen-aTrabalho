import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './index.html',
  styleUrl: './styles.scss'
})
export class HomeHeroComponent {}
