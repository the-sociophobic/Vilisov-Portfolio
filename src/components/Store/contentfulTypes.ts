

interface ContentfulItem {
  id: string
  name: string
  desc: JSX.Element
  url: string
}

interface File extends ContentfulItem {
  id: string
  file: {
    contentType: string
    details: {
      size: number
      image?: {
        width: number
        height: number
      }
    }
    fileName: string
    url: string
  }
}


export type {
  ContentfulItem,
  File
}
