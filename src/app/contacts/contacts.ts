import { Component } from '@angular/core';
import { LucideAngularModule, Github, Linkedin, Mail, Phone } from 'lucide-angular';

@Component({
  selector: 'app-contacts',
  imports: [LucideAngularModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly Phone = Phone;
}
