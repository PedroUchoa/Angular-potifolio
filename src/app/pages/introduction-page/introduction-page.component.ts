import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-introduction-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './introduction-page.component.html',
  styleUrl: './introduction-page.component.css',
})
export class IntroductionPageComponent implements OnInit {


  ngOnInit() {
  }


}
