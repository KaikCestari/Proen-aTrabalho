import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="app">
      <app-header />
      <main>
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        background: #f5f7fb;
      }

      .app {
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
      }

      main {
        padding: clamp(1.5rem, 4vw, 3rem);
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
      }
    `
  ]
})
export class AppComponent {}
