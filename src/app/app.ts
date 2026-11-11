import { Component } from '@angular/core';
import { HeroPanel } from './sections/hero/hero';
import { ContactPanel } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [HeroPanel, ContactPanel],
})
export class App {}
