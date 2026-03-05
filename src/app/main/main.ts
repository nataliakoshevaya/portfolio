import { Component } from '@angular/core';
import { Experience } from './experience/experience';

@Component({
  selector: 'app-main',
  imports: [Experience],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
