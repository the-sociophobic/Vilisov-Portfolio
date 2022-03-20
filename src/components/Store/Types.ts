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
  locale: 'ru' | 'en'
  contentfulData: any[]
  contentful: any
}

const initialState: StateType = {
  opened: false,
  locale: 'ru',
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
