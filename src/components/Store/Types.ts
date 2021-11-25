import {
  ContentfulItem,
  File
} from './contentfulTypes'


interface ProjType extends ContentfulItem {
  projects: Project[]
}

interface Project extends ContentfulItem {
  images: File[]
  externalLink: string
}


type StateType = {
  opened: boolean
  locale: string
  contentfulData: any[]
  contentful: any
}

const initialState = {
  opened: false,
  locale: "rus",
  contentfulData: [],
  contentful: {},
}

export type {
  StateType,
  ProjType,
  Project
}
export {
  initialState,
}
