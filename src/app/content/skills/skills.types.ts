export type SkillGroup = {
  id: string,
  title: string,
  items: SkillItem[]
}

export type SkillItem = {
  name: string,
  basic?: boolean
}

import data from './skills.json';
export const SKILLS: Record<string,SkillItem> = data;