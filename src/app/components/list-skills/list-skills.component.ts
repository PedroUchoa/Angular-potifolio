import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-list-skills',
  standalone: true,
  templateUrl: './list-skills.component.html',
  styleUrl: './list-skills.component.css',
})
export class ListSkillsComponent {
  @Input() url: string = "";
  @Input() alt: string ="";


}
