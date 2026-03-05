import { Component, input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css',
})
export class ExperienceCard {
  $yearsOfExperience = input.required<string>();
  $title = input.required<string>();
  $description = input.required<string>();
  $skills = input.required<string[]>();

}
