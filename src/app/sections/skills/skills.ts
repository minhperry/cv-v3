import { Component, computed, signal } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { SKILLS } from "../../content/skills/skills.types";
import { SkillChip } from "./chip";

@Component({
  selector: "skills",
  templateUrl: "./skills.html",
  styleUrl: "./skills.scss",
  imports: [TranslatePipe, SkillChip]
})
export class SkillsPanel {
  readonly SKILLS = SKILLS; 

  readonly groups = signal<Record<string, string[]>>({
    "frontend": ["angular", "typescript", "ionic", "tailwind", "primeng", "html-css", "react", "svelte", "astro"],
    "backend": ["java", "spring-boot", "spring-data-jpa", "postgresql", "rest-apis", "kotlin", "python", "rust", "cpp"],
    "test-release": ["playwright", "junit", "jest", "testcontainers", "github-actions", "ansible"],
    "ops": ["linux", "docker", "caddy", "nginx", "cloudflare", "hetzner", "bash", "terraform"],
    "tools": ["git", "gitlab", "gradle", "jira", "claude-code", "n8n"],
  });

  keys = computed(() => 
    Object.keys(this.groups())
  )
}