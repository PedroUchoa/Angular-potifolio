import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IntroductionPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-portifolio';
}
