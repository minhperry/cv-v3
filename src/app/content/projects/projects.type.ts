export type ProjectCardItem = {
  imgUrl: string,
  titleKey: string,
  descKey: string,
  links?: ProjectLink[],
}

type ProjectLink = {
  label: string,
  url: string,
}