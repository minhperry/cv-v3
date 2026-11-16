import { Component } from '@angular/core';
import { HeroPanel } from './sections/hero/hero';
import { ContactPanel } from './sections/contact/contact';
import { SkillsPanel } from './sections/skills/skills';
import { ProjectsView } from './sections/projects/projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [HeroPanel, ContactPanel, SkillsPanel, ProjectsView],
})
export class App {}
