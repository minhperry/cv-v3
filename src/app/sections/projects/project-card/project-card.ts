import { Component, input } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { Link } from "../../../ui/link/link";
import { ProjectCardItem } from "../../../content/projects/projects.type";

@Component({
  selector: 'p-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  imports: [TranslatePipe, Link]
})
export class ProjectCard {
  project = input.required<ProjectCardItem>();
}