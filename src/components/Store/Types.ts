import {
  ContentfulItem,
  File
} from './contentfulTypes'


interface ProjType extends ContentfulItem {
  projects: Project[]
}

interface Project extends ContentfulItem {
  images: File[]
}


type StateType = {
  locale: string
  contentfulData: any[]
  contentful: any
}

const initialState = {
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
