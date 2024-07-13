import { Component } from '@angular/core';
import { ListSkillsComponent } from '../../components/list-skills/list-skills.component';

@Component({
  selector: 'app-skill-page',
  standalone: true,
  imports: [ListSkillsComponent],
  templateUrl: './skill-page.component.html',
  styleUrl: './skill-page.component.css'
})
export class SkillPageComponent {

}
