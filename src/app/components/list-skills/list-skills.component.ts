import { Component } from '@angular/core';
import { cards } from '../../interfaces/cards-interface';

@Component({
  selector: 'app-list-skills',
  standalone: true,
  imports: [],
  templateUrl: './list-skills.component.html',
  styleUrl: './list-skills.component.css',
})
export class ListSkillsComponent {
  skills: cards[] = [
    {
      title: 'Backend',
      skills: [
        {
          name: 'Java',
          image: '../../../assets/icons/java.png',
        },
        {
          name: 'Spring Boot',
          image: '../../../assets/icons/springBoot.png',
        },
        {
          name: 'Junit 5',
          image: '../../../assets/icons/junit.png',
        },
        {
          name: 'Docker',
          image: '../../../assets/icons/docker.png',
        },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        {
          name: 'Javascript',
          image: '../../../assets/icons/javascript.png',
        },
        {
          name: 'Typescript',
          image: '../../../assets/icons/typescript.png',
        },
        {
          name: 'Html',
          image: '../../../assets/icons/html.png',
        },
        {
          name: 'Css',
          image: '../../../assets/icons/css.png',
        },
        {
          name: 'React',
          image: '../../../assets/icons/react.png',
        },
        {
          name: 'Angular',
          image: '../../../assets/icons/angular.png',
        },
        {
          name: 'Tailwind',
          image: '../../../assets/icons/tailwind.png',
        },
      ],
    },
    {
      title: 'Database',
      skills: [
        {
          name: 'MySql',
          image: '../../../assets/icons/mysql.png',
        },
        {
          name: 'MongoDb',
          image: '../../../assets/icons/mongo.png',
        },
      ],
    },
    {
      title: 'Tools',
      skills: [
        {
          name: 'Git',
          image: '../../../assets/icons/git.png',
        },
        {
          name: 'GitHub',
          image: '../../../assets/icons/github.png',
        },
        {
          name: 'Vscode',
          image: '../../../assets/icons/vscode.png',
        },
        {
          name: 'Intellij',
          image: '../../../assets/icons/intellij.png',
        },
        {
          name: 'Insomnia',
          image: '../../../assets/icons/insomnia.png',
        },
      ],
    },
  ];
}
