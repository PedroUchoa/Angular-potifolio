import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-projects',
  standalone: true,
  imports: [],
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.css',
})
export class ListProjectsComponent {
  @Input() image:string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() stacks: string = '';
  @Input() url: string = '';
}
