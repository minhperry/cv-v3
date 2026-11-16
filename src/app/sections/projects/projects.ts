import { Component } from "@angular/core";
import { ProjectCard } from "./project-card/project-card";

@Component({
  selector: 'projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  imports: [ProjectCard]
})
export class ProjectsView {
  projects = [
    {
      imgUrl: 'https://cdn.minhperry.de/images/skyblock.png',
      titleKey: 'projects.skyblock.title',
      descKey: 'projects.skyblock.desc',
      links: [
        { label: 'Live', url: 'https://skyblock.minhperry.de' },
        { label: 'Forgejo', url: 'https://git.minhperry.de/skyblock-simulator' },
      ],
    },
    {
      imgUrl: '',
      titleKey: 'projects.homelab.title',
      descKey: 'projects.homelab.desc',
    },
    {
      imgUrl: 'https://cdn.minhperry.de/images/skyhanni-logo.png',
      titleKey: 'projects.skyhanni.title',
      descKey: 'projects.skyhanni.desc',
      links: [
        { label: 'GitHub', url: 'https://github.com/hannibal002/SkyHanni' }
      ],
    },
    {
      imgUrl: 'https://chibi.minhperry.de/eto2fw2PAnMf.png',
      titleKey: 'projects.swp.title',
      descKey: 'projects.swp.desc',
    },
  ]
}