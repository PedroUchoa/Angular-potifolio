import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionPageComponent } from './pages/introduction-page/introduction-page.component';
import { SkillPageComponent } from './pages/skill-page/skill-page.component';
import { NgOptimizedImage } from '@angular/common';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { HeadComponent } from './components/head/head.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IntroductionPageComponent,SkillPageComponent,NgOptimizedImage,ProjectPageComponent, HeadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-portifolio';
}
