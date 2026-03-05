import { Component, signal } from '@angular/core';
import { Main } from './main/main';
import { Intro } from './intro/intro';

@Component({
  selector: 'app-root',
  imports: [Main, Intro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
