import { Component } from '@angular/core';
import { ListSkillsComponent } from '../../components/list-skills/list-skills.component';
import { skills } from '../../interfaces/cards-interface';

@Component({
  selector: 'app-skill-page',
  standalone: true,
  imports: [ListSkillsComponent],
  templateUrl: './skill-page.component.html',
  styleUrl: './skill-page.component.css',
})
export class SkillPageComponent {
  skills: skills[] = [
    {
      url: '../../../assets/icons/Java.svg',
      alt: 'Simbolo do Java',
    },
    {
      url: '../../../assets/icons/Spring.svg',
      alt: 'Simbolo do Spring',
    },
    {
      url: '../../../assets/icons/MySQL.svg',
      alt: 'Simbolo do Mysql',
    },
    {
      url: '../../../assets/icons/JUnit.svg',
      alt: 'Simbolo do Junit',
    },
    {
      url: '../../../assets/icons/TypeScript.svg',
      alt: 'Simbolo do Typescript',
    },
    {
      url: '../../../assets/icons/Angular.svg',
      alt: 'Simbolo do Angular',
    },
    {
      url: '../../../assets/icons/Docker.svg',
      alt: 'Simbolo do Docker',
    },
    {
      url: '../../../assets/icons/Linux.svg',
      alt: 'Simbolo do Linux',
    },
    {
      url: '../../../assets/icons/github-white-icon.svg',
      alt: 'Simbolo do Github',
    },
    {
      url: '../../../assets/icons/Kotlin.svg',
      alt: 'Simbolo do Kotlin',
    },
  ];
}
