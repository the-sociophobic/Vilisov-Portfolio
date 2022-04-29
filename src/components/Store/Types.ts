import {
  ContentfulItem,
  File
} from './contentfulTypes'


export interface MainPage extends Omit<ContentfulItem, 'name'> {
  title1: string
  title2: string
  button1: string
  button2: string
  types: ProjType[]
  avatar: File
}

export interface ProjType extends ContentfulItem {
  projects: Project[]
  images?: File[]
  externalLink?: string
}

export interface Project extends ContentfulItem {
  images: File[]
  externalLink: string
}

export type ContentfulData = {
  mainPages: MainPage[]
  types: ProjType[]
  projects: Project[]
}

export type StateType = {
  opened: boolean
  locale: 'ru' | 'en'
  showAvatar: boolean
  contentfulData: ({} | ContentfulData)[]
  contentful: {} | ContentfulData
}

const initialState: StateType = {
  opened: false,
  locale: 'ru',
  showAvatar: false,
  contentfulData: [],
  contentful: {},
}

export {
  initialState,
}
