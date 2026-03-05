import { Component } from '@angular/core';
import { ExperienceCard } from './experience-card/experience-card';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCard],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  protected buhlerExperience = {
    yearsOfExperience: '2022 - Present',
    title: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: ['JavaScript', 'Angular', 'TypeScript'],
  };

  protected nyxExperience = {
    yearsOfExperience: '2021 - 2022',
    title: 'Frontend Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    skills: ['React', 'JavaScript', 'CSS'],
  };

  protected experiences = [this.buhlerExperience, this.nyxExperience];
}
