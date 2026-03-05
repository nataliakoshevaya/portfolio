import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Contacts } from '../contacts/contacts';

@Component({
  selector: 'app-intro',
  imports: [Nav, Contacts],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro {}
